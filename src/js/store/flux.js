const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listContacts:[] // inicializacion de contactos vacia
		},
		actions: {

            loadContacts:async() =>{
				const store = getStore ();
				try {
					const response = await fetch ("https://playground.4geeks.com/contact/docs");
					const data = await response.json();
					setStore ({listContacts:data}); // actualiza el estado con los contactos obtenidos de la API
				}catch(error){
					console.error("Error loading contacts:",error);
				}
				
			},

			createContact:(contact)=>{
				const store = getStore();
				setStore({listContacts: [...store.listContacts, contact] }); // agrega el nuevo contacto a la lista
				
			},
				
			editContact :(id,updateContact) =>{
				const store = getStore ();
				const updateContacts = store.listContacts.map((contact) =>
				contact.id === id ? {...contact,...updatedContact} : contact
			);
			setStore({listContacts : updateContacts}); // actualiza la lista con el contacto editado
			},

			deleteContact : (id) =>{
				const store = getStore();
				const filteredContacts = store.listContacts.filter(contact => contact.id !==id);
				setStore({listContacts : filteredContacts}); // elimina el contacto de la lista
			}
		}	
		};
	};


export default getState;
