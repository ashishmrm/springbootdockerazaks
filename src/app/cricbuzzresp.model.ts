export interface CricBuzzResp {
    matches: [{
        header: {
            state: string;
            status: string;
        };
        bat_team: {
            innings: [{
                score: string;
                wkts: string;
                overs: string
            }]
        };
        team1: {
            s_name: string;
        };
        team2: {
            s_name: string;
        };
        batsman: [{
            name: string;
            r: string;
        }];
    }]
}