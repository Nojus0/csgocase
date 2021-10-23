import { CaseRarity } from "./colors";

export type IAssaultRifles = "AK-47" | "AUG" | "FAMAS" | "Galil AR" | "M4A1-S" | "M4A4" | "SG 553";
export type ISniperRifles = "AWP" | "G3SG1" | "SCAR-20" | "SSG 08";
export type ISMGS = "MAC-10" | "MP5-SD" | "MP7" | "MP9" | "P90" | "PP-Bizon" | "UMP-45"
export type IMachineGuns = "M249" | "Negev";
export type IShotguns = "MAG-7" | "Nova" | "Sawed-Off" | "XM1014";
export type IPistols = "CZ75" | "Desert Eagle" | "Dual Barettas" | "Five-SeveN" | "Glock-18" | "P2000" | "P250" | "R8 Revolver" | "Tec-9" | "USP-S";
export type IMelle =
    "Bayonet" | "Flip Knife" | "Gut Knife" | "Karambit" | "M9 Bayonet" | "Huntsman Knife"
    | "Butterfly Knife" | "Falchion Knife" | "Shadow Daggers" | "Bowie Knife" | "Ursus Knife"
    | "Navaja Knife" | "Stiletto Knife" | "Talon Knife" | "Classic Knife" | "Paracord Knife"
    | "Survival Knife" | "Skeleton Knife" | "Nomad Knife"
export type IWeapon = IAssaultRifles | ISniperRifles | ISMGS | IMachineGuns | IShotguns | IPistols | IMelle;

export type ISpecialItem = "★ Rare Special Item ★"

export interface ISingleCase {
    weapon: IWeapon | ISpecialItem | "",
    skin: string,
    rarity: CaseRarity
    imageUrl: string
}

export interface ICompleteCase {
    name: string,
    description: string,
    keyImg: string
    skins: Array<ISingleCase>
}