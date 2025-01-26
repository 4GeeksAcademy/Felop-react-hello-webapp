const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listContacts: [], 
			currentName: "felop",
		},
		actions: {

			fetchContacts: async () => {
				const store = getStore();
				const actions = getActions();
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${store.currentName}/contacts`)
					if (response.status == 404) {
						actions.createAgenda()
						return null;
					}
					if (!response.ok) {

						throw new Error("no sirvio", response)
					}
					const data = await response.json();



					console.log(data)
					setStore({ ...store, listContacts: data.contacts })
				} catch (error) {
					console.error(error);
				}

			},

			createAgenda: async () => {
				try {
					const store = getStore();

					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${store.currentName}`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					});



				} catch (error) {
					console.error("Error al crear la agenda:", error);
					return false;
				}
			},

			setCurrentName: (actualName) => {
				console.log("entro en el actions set current name y recibio", actualName)
				const store = getStore();
				setStore({ ...store, currentName: actualName });
			},

			addContact: async (contact) => {
				const store = getStore();
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${store.currentName}/contacts`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							...contact,

						}),
					});

					if (!response.ok) {
						throw new Error("Error al guardar el contacto");
					}

					const data = await response.json();
					console.log("Contacto agregado exitosamente:", data);


					setStore({
						listContacts: [...store.listContacts, data],
					});

					return true;
				} catch (error) {
					console.error("Error adding contact:", error);
					return false;
				}
			},
			editContact: (id, contact) => {
                const store = getStore()
				console.log('Actualizando contacto:', contact);
                fetch(`https://playground.4geeks.com/contact/agendas/${store.currentName}/contacts/${contact.id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
						throw new Error('Error al actuzaliar contacto')
                    })
                    .then((data) => {
						
						const updatedList = store.listContacts.map(existingContact => 
							existingContact.id === id ? { ...existingContact, ...data } : existingContact
						);
				
						
						setStore({ listContacts: updatedList });
					})
					.catch((error) => {
						console.error("Error al actualizar el contacto:", error);
					});
				},
			
			
			deleteContact: async (id) => {
				try {
					const store = getStore();
					const currentName = store.currentName;
					if (!store.currentName) {
						throw new Error("El nombre de la agenda (currentName) está vacío");
					}

					const response = await fetch(`https://playground.4geeks.com/contact/agendas/${currentName}/contacts/${id}`, {
						method: "DELETE",
					});
					if (response.ok) {

						const updatedContacts = store.listContacts.filter((contact) => contact.id !== id);
						setStore({ ...store, listContacts: updatedContacts });
						console.log(`Contacto con ID ${id} eliminado`);
					} else {
						console.error("Error al eliminar el contacto");
					}
				} catch (error) {
					console.error("Error deleting contact:", error);
				}
			},
		}

	};
	
}







export default getState;
