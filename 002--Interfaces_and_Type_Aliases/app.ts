// interfaces
interface MyData {
    name: string,
    email: string,
    age: number
}

interface NewMyData extends MyData{
    isAdmin : boolean
}

function GetData(obj : NewMyData){
    console.log(obj.age, obj.email, obj.name, obj.isAdmin);
}

GetData({
    name:'janisar',
    email : 'janisarhyder@gmail.com',
    age: 19,
    isAdmin: false
})

// type aliases
type UserData = {
    name: string,
    email: string,
    age: number
}
type AdminData = UserData & {
    GetDetails(user: string) : void
}
function Abcd(a:AdminData){
    console.log(a.name, a.email, a.age);
    a.GetDetails("Hi I am under the water.")
}
Abcd({
    name: 'janisar',
    email: 'janisar@gmail.com',
    age: 19,
    GetDetails(user: string){
        console.log(user);
    }
})