export class Persona{
    edad:Number;
    constructor(public urlPerfil:String, public nombre:String, public correo:String, public linkedin:String, public instagram:String, public twitter:String, public telefono:String, public urlCurriculim:String){
        function calculateAge(birthday) {
            var birthday_arr = birthday.split("/");
            var birthday_date = new Date(birthday_arr[2], birthday_arr[1] - 1, birthday_arr[0]);
            var ageDifMs = Date.now() - birthday_date.getTime();
            var ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }

        this.edad = calculateAge("19/01/1999");
    }
}