import Gun from 'gun';
const gun = Gun();

// Assuming 'delta' is the key you want to delete
gun.get('delta').put(null);