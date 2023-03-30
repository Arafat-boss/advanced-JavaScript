const student = [
    {id: 21, name: 'KaliBaba'},
    {id: 241, name: 'halim'},
    {id: 421, name: 'kamrul'},
    {id: 261, name: 'jayed khan'},
    {id: 66621, name: 'Sakinb'},
];
/*----------------update way---------- --*/
const name = student.map( s => s.name);
const id = student.map( i => i.id);
const manyPerson = student.filter(X => X.id>40);
const onPerson = student.find( X => X.id>241);

/*--------------------------old Way----------*/

const output = [];

for (let i = 0; i < student.length; i++) {
    const element = student [i];
    const result = element.name;
    output.push(result);
}


console.log(onPerson); 