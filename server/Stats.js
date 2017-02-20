module.exports = class Stats {

    static getWeaponStats(kills, id) {
        return kills.reduce((a, b) => {
            if (Stats._hasWeaponLabel(b.weapon_name, a)) {
                return Stats._addKill(a, b, id);
            } else {
                return a.concat(Stats._getWeaponStatFromKill(b, id));
            }
        }, []);
    }

    static _hasWeaponLabel(label, weapons) {
        return weapons.filter(function(cur) {
            return cur.label === label;
        }).length > 0;
    }

    static _getWeaponStatFromKill(kill, id) {
        return {
            label: kill.weapon_name,
            kills: kill.killer_id === id ? 1 : 0,
            hs: kill.hit_loc === 'head' ? 1 : 0,
            deaths: kill.victim_id === id ? 1 : 0
        };
    }

    static _addKill(weapons, kill, id) {
        return weapons.map(function(cur) {
            return {
                label: cur.label,
                kills: cur.label === kill.weapon_name && id === kill.killer_id ? cur.kills + 1 : cur.kills,
                hs: cur.label === kill.weapon_name && id === kill.killer_id && kill.hit_loc === 'head' ? cur.hs + 1 : cur.hs,
                deaths: cur.label === kill.weapon_name && id === kill.victim_id ? cur.deaths + 1 : cur.deaths,
            }
        });
    }

    static getOverallStats(arr) {
        return {};
        // TODO(implement)

    }

    static _getConnections(sessions) {
        return sessions.length;
    }

    static _getTimePlayed(sessions) {
        return sessions.reduce(function(a, b) {
            return a + b.length;
        }, 0);
    }

    static _getTotalScore(sessions) {
        return sessions.reduce(function(a, b) {
            return a + b.score;
        }, 0);
    }
}