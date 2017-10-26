import {JsonObject, JsonProperty} from "json2typescript";

    @JsonObject
    export class Kills {
        elites: number= undefined;
    }
    
    @JsonObject
    export class Hero {
        id: number= undefined;
        name: string= undefined;
        class: string= undefined;
        gender: number= undefined;
        level: number= undefined;
        kills: Kills= undefined;
        paragonLevel: number= undefined;
        hardcore: boolean= undefined;
        seasonal: boolean= undefined;
        dead: boolean= undefined;
        @JsonProperty("last-updated",Number)
        last_updated: number= undefined;
    }
    @JsonObject
    export class Kills2 {
        monsters: number= undefined;
        elites: number= undefined;
        hardcoreMonsters: number= undefined;
    }
    @JsonObject
    export class TimePlayed {
        @JsonProperty("barbarian",Number)
        barbarian: number= undefined;
        @JsonProperty("crusader",Number)
        crusader: number= undefined;
        @JsonProperty("demon-hunter",Number)
        demonhunter: number= undefined;
        @JsonProperty("monk",Number)
        monk: number= undefined;
        @JsonProperty("necromancer",Number)
        necromancer: number= undefined;
        @JsonProperty("witch-doctor",Number)
        witchdoctor: number= undefined;
        @JsonProperty("wizard",Number,true)
        wizard?: number= undefined;
    }
    @JsonObject
    export class Progression {
        act1: boolean= undefined;
        act2: boolean= undefined;
        act3: boolean= undefined;
        act4: boolean= undefined;
        act5: boolean= undefined;
    }

    @JsonObject
    export class Profile {
        @JsonProperty("battleTag",String)
        battleTag: string= undefined;
        paragonLevel: number= undefined;
        paragonLevelHardcore: number= undefined;
        paragonLevelSeason: number= undefined;
        paragonLevelSeasonHardcore: number= undefined;
        guildName: string= undefined;
        heroes: Hero[]= undefined;
        lastHeroPlayed: number= undefined;
        lastUpdated: number= undefined;
        kills: Kills2= undefined;
        highestHardcoreLevel: number= undefined;
        @JsonProperty("timePlayed",TimePlayed)
        timePlayed: TimePlayed= undefined;
        progression: Progression= undefined;
    }