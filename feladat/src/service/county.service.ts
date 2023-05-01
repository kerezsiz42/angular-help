import { Injectable } from "@angular/core";

export type County = {
  id: string;
  name: string;
  region: string;
  populus: number;
  countySeat: string;
  flag: string;
};

@Injectable({
  providedIn: "root",
})
export class CountyService {
  private items: County[] = [
    {
      id: crypto.randomUUID(),
      name: "Bács-Kiskun",
      region: "Dél-Alföld",
      populus: 504000,
      countySeat: "Kecskemét",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_B%C3%A1cs-Kiskun_County.svg",
    },
    {
      id: crypto.randomUUID(),
      name: "Baranya",
      region: "Dél-Dunántúl",
      populus: 361000,
      countySeat: "Pécs",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Baranya_County.svg",
    },
    {
      id: crypto.randomUUID(),
      name: "Békés",
      region: "Dél-Alföld",
      populus: 334000,
      countySeat: "Békéscsaba",
      flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_B%C3%A9k%C3%A9s_megye.svg",
    },
    {
      id: crypto.randomUUID(),
      name: "Borsod-Abaúj-Zemplén",
      region: "Észak-Magyarország",
      populus: 642000,
      countySeat: "Miskolc",
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/FLAG-Borsod-Aba%C3%BAj-Zempl%C3%A9n-megye.svg",
    },
    {
      id: crypto.randomUUID(),
      name: "Csongrád-Csanád",
      region: "Dél-Alföld",
      populus: 399000,
      countySeat: "Szeged",
      flag: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Flag_of_Csongrad-Csanad_megye.svg",
    },
    {
      id: crypto.randomUUID(),
      name: "Fejér",
      region: "Közép-Dunántúl",
      populus: 418000,
      countySeat: "Székesfehérvár",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/75/FLAG-Fej%C3%A9r-megye.svg",
    },
  ];

  public getCounties(): County[] {
    return this.items;
  }

  public findCountyById(itemId: County["id"]): County | undefined {
    return this.items.find((i) => i.id === itemId);
  }

  public removeCounty(itemId: County["id"]): void {
    this.items = this.items.filter((i) => i.id !== itemId);
  }

  public addOrEditCounty(modifiedItem: County): void {
    this.removeCounty(modifiedItem.id);
    this.items.push(modifiedItem);
  }
}
