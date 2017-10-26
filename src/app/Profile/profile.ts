import {JsonObject, JsonProperty} from "json2typescript";

    @JsonObject
    export class Kills {
        @JsonProperty("monsters",Number,true)
        monsters: number= 0;
        @JsonProperty("elites",Number)
        elites: number= undefined;
        @JsonProperty("hardcoreMonsters",Number,true)
        hardcoreMonsters: number= 0;
    }
    
    @JsonObject
    export class Hero {
        @JsonProperty("id",Number)
        id: number= undefined;
        @JsonProperty("name",String)        
        name: string= undefined;
        @JsonProperty("class",String)
        class: string= undefined;
        @JsonProperty("gender",Number)
        gender: number= undefined;
        @JsonProperty("level",Number)
        level: number= undefined;
        @JsonProperty("kills",Kills)
        kills: Kills= undefined;
        @JsonProperty("paragonLevel",Number)
        paragonLevel: number= undefined;
        @JsonProperty("hardcore",Boolean)
        hardcore: boolean= undefined;
        @JsonProperty("seasonal",Boolean)
        seasonal: boolean= undefined;
        @JsonProperty("dead",Boolean)
        dead: boolean= undefined;
        @JsonProperty("last-updated",Number)
        last_updated: number= undefined;
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
        @JsonProperty("act1",Boolean)
        act1: boolean= undefined;
        @JsonProperty("act2",Boolean)
        act2: boolean= undefined;
        @JsonProperty("act3",Boolean)
        act3: boolean= undefined;
        @JsonProperty("act4",Boolean)
        act4: boolean= undefined;
        @JsonProperty("act5",Boolean)
        act5: boolean= undefined;
    }

    @JsonObject
    export class Profile {
        @JsonProperty("battleTag",String)
        battleTag: string= undefined;
        @JsonProperty("paragonLevel",Number)
        paragonLevel: number= undefined;
        @JsonProperty("paragonLevelHardcore",Number)
        paragonLevelHardcore: number= undefined;
        @JsonProperty("paragonLevelSeason",Number)
        paragonLevelSeason: number= undefined;
        @JsonProperty("paragonLevelSeasonHardcore",Number)
        paragonLevelSeasonHardcore: number= undefined;
        @JsonProperty("guildName",String)
        guildName: string= undefined;
        @JsonProperty("heroes",[Hero])
        heroes: Hero[]= undefined;
        @JsonProperty("lastHeroPlayed",Number)
        lastHeroPlayed: number= undefined;
        @JsonProperty("lastUpdated",Number)
        lastUpdated: number= undefined;
        @JsonProperty("kills",Kills)
        kills: Kills= undefined;
        @JsonProperty("highestHardcoreLevel",Number)
        highestHardcoreLevel: number= undefined;
        @JsonProperty("timePlayed",TimePlayed)
        timePlayed: TimePlayed= undefined;
        @JsonProperty("progression",Progression)
        progression: Progression= undefined;
    }