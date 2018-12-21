import { Information } from '../data/info';

export class RepoService{

    infoArray: Information[] = [
       {
           name: 'Jon Snow',
           relation: 'Brother',
           dob: '22 sept 1985',
           icon: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
           mesage: 'Wish you happy birthday my dear brother',
           contact: 8908156654
       },
       {
           name: 'Arya Stark',
           relation: 'Sister',
           dob: '20 Aug 1989',
           icon: "https://mbtskoudsalg.com/images/avatar-icon-png-1.png",
           mesage: 'Wish you happy birthday my dear sister',
           contact: 9916467961
       }
    ];

    addInfoArray(info: Information){
       this.infoArray.push(info);
    }

    getInfoArray(index: number){
        return this.infoArray[index];
    }


}