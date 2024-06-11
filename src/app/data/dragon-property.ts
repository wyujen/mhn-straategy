import { IProperty } from "libs/mhn-store/src/lib/property/property.model"
import { IDragonProperty } from "libs/mhn-store/src/lib/dragon-property/dragon-property.model"

// '片手', '大劍', '大鎚', '太刀', '輕弩', 
// '弓', '雙刀', '長矛', '斬擊斧'
export const originalProperty: IProperty[] = [
    {
        id: 'p01',
        name: '火',
    },{
        id: 'p02',
        name: '水',
    }, {
        id: 'p03',
        name: '雷',
    }, {
        id: 'p04',
        name: '冰',
    }, {
        id: 'p05',
        name: '龍',
    }, {
        id: 'p06',
        name: '毒',
    }, {
        id: 'p07',
        name: '麻',
    }, {
        id: 'p08',
        name: '眠',
    },{
        id: 'p09',
        name: '無',
    }
]

export const originalDragonaPropertyList: IDragonProperty[] = [
    // 大凶
    {
        id: 'd01p09',
        isWeek: false,
        propertyId: 'p09',
        dragonId: 'd01',
    },
    {
        id: 'd01p01',
        isWeek: true,
        propertyId: 'p01',
        dragonId: 'd01',
    },
    {
        id: 'd01p06',
        isWeek: true,
        propertyId: 'p06',
        dragonId: 'd01',
    },
    {
        id: 'd01p07',
        isWeek: true,
        propertyId: 'p07',
        dragonId: 'd01',
    },
    {
        id: 'd01p08',
        isWeek: true,
        propertyId: 'p08',
        dragonId: 'd01',
    },
    // 搔鳥
    {
        id: 'd02p09',
        isWeek: false,
        propertyId: 'p09',
        dragonId: 'd02',
    },
    {
        id: 'd02p02',
        isWeek: true,
        propertyId: 'p02',
        dragonId: 'd02',
    },
    {
        id: 'd02p07',
        isWeek: true,
        propertyId: 'p07',
        dragonId: 'd02',
    },

    //     id: 'd03',
    //     name: '毒妖鳥'
    {
        id: 'd03p06',
        isWeek: false,
        propertyId: 'p06',
        dragonId: 'd03',
    },
    {
        id: 'd03p03',
        isWeek: true,
        propertyId: 'p03',
        dragonId: 'd03',
    }, {
        id: 'd03p07',
        isWeek: true,
        propertyId: 'p07',
        dragonId: 'd03',
    },
    {
        id: 'd03p08',
        isWeek: true,
        propertyId: 'p08',
        dragonId: 'd03',
    },

    //     id: 'd04',
    //     name: '水妖鳥'
    {
        id: 'd04p02',
        isWeek: false,
        propertyId: 'p02',
        dragonId: 'd04',
    }, 
    {
        id: 'd04p04',
        isWeek: true,
        propertyId: 'p04',
        dragonId: 'd04',
    }, {
        id: 'd04p06',
        isWeek: true,
        propertyId: 'p06',
        dragonId: 'd04',
    },

    //     id: 'd05',
    //     name: '土砂龍'
    {
        id: 'd05p02',
        isWeek: false,
        propertyId: 'p02',
        dragonId: 'd05',
    },
    {
        id: 'd05p01',
        isWeek: true,
        propertyId: 'p01',
        dragonId: 'd05',
    },
    {
        id: 'd05p06',
        isWeek: true,
        propertyId: 'p06',
        dragonId: 'd05',
    },

    //     id: 'd06',
    //     name: '大凶顎龍'
    {
        id: 'd06p07',
        isWeek: false,
        propertyId: 'p07',
        dragonId: 'd06',
    },
    {
        id: 'd06p02',
        isWeek: true,
        propertyId: 'p02',
        dragonId: 'd06',
    }, {
        id: 'd06p08',
        isWeek: true,
        propertyId: 'p08',
        dragonId: 'd06',
    },


    //     id: 'd07',
    //     name: '飛雷龍'
    {
        id: 'd07p03',
        isWeek: false,
        propertyId: 'p03',
        dragonId: 'd07',
    }, 
    {
        id: 'd07p02',
        isWeek: true,
        propertyId: 'p02',
        dragonId: 'd07',
    }, {
        id: 'd07p06',
        isWeek: true,
        propertyId: 'p06',
        dragonId: 'd07',
    },


    //     id: 'd08',
    //     name: '浮空龍'
    {
        id: 'd08p09',
        isWeek: false,
        propertyId: 'p09',
        dragonId: 'd08',
    },
    {
        id: 'd08p01',
        isWeek: true,
        propertyId: 'p01',
        dragonId: 'd08',
    },

    //     id: 'd09',
    //     name: '泥魚龍'
    {
        id: 'd09p02',
        isWeek: false,
        propertyId: 'p02',
        dragonId: 'd09',
    }, 
    {
        id: 'd09p03',
        isWeek: true,
        propertyId: 'p03',
        dragonId: 'd09',
    }, 


    //     id: 'd10',
    //     name: '蠻顎龍'
    {
        id: 'd10p01',
        isWeek: false,
        propertyId: 'p01',
        dragonId: 'd10',
    },
    {
        id: 'd10p02',
        isWeek: true,
        propertyId: 'p02',
        dragonId: 'd10',
    }, 


    //     id: 'd11',
    //     name: '雌火龍'
    {
        id: 'd11p01',
        isWeek: false,
        propertyId: 'p01',
        dragonId: 'd11',
    },
    {
        id: 'd11p06',
        isWeek: false,
        propertyId: 'p06',
        dragonId: 'd11',
    },
    {
        id: 'd11p03',
        isWeek: true,
        propertyId: 'p03',
        dragonId: 'd11',
    }, 
    {
        id: 'd11p05',
        isWeek: true,
        propertyId: 'p05',
        dragonId: 'd11',
    }, 


    //     id: 'd12',
    //     name: '櫻火龍'
    {
        id: 'd12p01',
        isWeek: false,
        propertyId: 'p01',
        dragonId: 'd12',
    },
    {
        id: 'd12p06',
        isWeek: false,
        propertyId: 'p06',
        dragonId: 'd12',
    },
    {
        id: 'd12p03',
        isWeek: true,
        propertyId: 'p03',
        dragonId: 'd12',
    }, 
    {
        id: 'd12p05',
        isWeek: true,
        propertyId: 'p05',
        dragonId: 'd12',
    }, 


    //     id: 'd13',
    //     name: '風漂龍'
    {
        id: 'd13p04',
        isWeek: false,
        propertyId: 'p04',
        dragonId: 'd13',
    }, 
    {
        id: 'd13p01',
        isWeek: true,
        propertyId: 'p01',
        dragonId: 'd13',
    },
    {
        id: 'd13p06',
        isWeek: true,
        propertyId: 'p06',
        dragonId: 'd13',
    },

    //     id: 'd14',
    //     name: '角龍'
    {
        id: 'd14p09',
        isWeek: false,
        propertyId: 'p09',
        dragonId: 'd14',
    },
    {
        id: 'd14p04',
        isWeek: true,
        propertyId: 'p04',
        dragonId: 'd14',
    }, 
    {
        id: 'd14p05',
        isWeek: true,
        propertyId: 'p05',
        dragonId: 'd14',
    }, 
    {
        id: 'd14p07',
        isWeek: true,
        propertyId: 'p07',
        dragonId: 'd14',
    },


    //     id: 'd15',
    //     name: '黑角龍'
    {
        id: 'd15p09',
        isWeek: false,
        propertyId: 'p09',
        dragonId: 'd15',
    },
    {
        id: 'd15p04',
        isWeek: true,
        propertyId: 'p04',
        dragonId: 'd15',
    }, 
    {
        id: 'd15p07',
        isWeek: true,
        propertyId: 'p07',
        dragonId: 'd15',
    },


    //     id: 'd16',
    //     name: '火龍'
    {
        id: 'd16p01',
        isWeek: false,
        propertyId: 'p01',
        dragonId: 'd16',
    },
    {
        id: 'd16p06',
        isWeek: false,
        propertyId: 'p06',
        dragonId: 'd16',
    },
    {
        id: 'd16p03',
        isWeek: true,
        propertyId: 'p03',
        dragonId: 'd16',
    }, {
        id: 'd16p05',
        isWeek: true,
        propertyId: 'p05',
        dragonId: 'd16',
    }, 


    //     id: 'd17',
    //     name: '蒼火龍'
    {
        id: 'd17p01',
        isWeek: false,
        propertyId: 'p01',
        dragonId: 'd17',
    },
    {
        id: 'd17p06',
        isWeek: false,
        propertyId: 'p06',
        dragonId: 'd17',
    },
    {
        id: 'd17p04',
        isWeek: true,
        propertyId: 'p04',
        dragonId: 'd17',
    }, 
    {
        id: 'd17p05',
        isWeek: true,
        propertyId: 'p05',
        dragonId: 'd17',
    }, 


    //     id: 'd18',
    //     name: '骨鎚龍'
    {
        id: 'd18p08',
        isWeek: false,
        propertyId: 'p08',
        dragonId: 'd18',
    },
    {
        id: 'd18p04',
        isWeek: true,
        propertyId: 'p04',
        dragonId: 'd18',
    }, 
    {
        id: 'd18p05',
        isWeek: true,
        propertyId: 'p05',
        dragonId: 'd18',
    }, 
    {
        id: 'd18p06',
        isWeek: true,
        propertyId: 'p06',
        dragonId: 'd18',
    },


    //     id: 'd19',
    //     name: '猛牛龍'
    {
        id: 'd19p09',
        isWeek: false,
        propertyId: 'p09',
        dragonId: 'd19',
    },
    {
        id: 'd19p01',
        isWeek: true,
        propertyId: 'p01',
        dragonId: 'd19',
    },
    {
        id: 'd19p05',
        isWeek: true,
        propertyId: 'p05',
        dragonId: 'd19',
    }, 

    //     id: 'd20',
    //     name: '冰牙龍'
    {
        id: 'd20p04',
        isWeek: false,
        propertyId: 'p04',
        dragonId: 'd20',
    }, 
    {
        id: 'd20p01',
        isWeek: true,
        propertyId: 'p01',
        dragonId: 'd20',
    },

    //     id: 'd21',
    //     name: '雷狼龍'
    {
        id: 'd21p03',
        isWeek: false,
        propertyId: 'p03',
        dragonId: 'd21',
    }, 
    {
        id: 'd21p04',
        isWeek: true,
        propertyId: 'p04',
        dragonId: 'd21',
    }, 


    //     id: 'd22',
    //     name: '眩鳥'
    {
        id: 'd22p09',
        isWeek: false,
        propertyId: 'p09',
        dragonId: 'd22',
    },
    {
        id: 'd22p04',
        isWeek: true,
        propertyId: 'p04',
        dragonId: 'd22',
    }, 


    //     id: 'd23',
    //     name: '慘爪龍'
    {
        id: 'd23p09',
        isWeek: false,
        propertyId: 'p09',
        dragonId: 'd23',
    },
    {
        id: 'd23p04',
        isWeek: true,
        propertyId: 'p04',
        dragonId: 'd23',
    }, {
        id: 'd23p07',
        isWeek: true,
        propertyId: 'p07',
        dragonId: 'd23',
    },


    //     id: 'd24',
    //     name: '恐暴龍'
    {
        id: 'd24p05',
        isWeek: false,
        propertyId: 'p05',
        dragonId: 'd24',
    }, 
    {
        id: 'd24p03',
        isWeek: true,
        propertyId: 'p03',
        dragonId: 'd24',
    }, {
        id: 'd24p05',
        isWeek: true,
        propertyId: 'p05',
        dragonId: 'd24',
    }, 
    {
        id: 'd24p06',
        isWeek: true,
        propertyId: 'p06',
        dragonId: 'd24',
    }
]




// {
//     id:'d25',
//     name:''
// },{
//     id:'d26',
//     name:''
// },{
//     id:'d27',
//     name:''
// },{
//     id:'d28',
//     name:''
// },{
//     id:'d29',
//     name:''
// },{
//     id:'d30',
//     name:''
// },{
//     id:'d31',
//     name:''
// },{
//     id:'d32',
//     name:''
// },{
//     id:'d33',
//     name:''
// }
