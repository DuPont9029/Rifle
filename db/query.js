import Gun from 'gun';
const gun = Gun();

const delta = gun.get('delta');

delta.on((data) => {
    console.log(data.first_name);
    console.log(data.last_name);
    console.log(data.age);
});