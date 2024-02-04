import Gun from 'gun';
const gun = Gun();

const delta = gun.get('delta');

delta.put({first_name: 'Giorgio', last_name: 'Mageri', age: 20});

delta.on((data) => {
    console.log(data);
})
