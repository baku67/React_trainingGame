export const ITEMS = [
    // Armes
    { name: "Knife (1M)", 
        type: "item",
        description: "+ 2 ATK", 
        emplacement: "1m",
        price: 10,
        buffHp: 0,
        buffAttack: 2,
        buffDefense: 0,
    },
    { name: "Hammer (1M)",  
        type: "item",
        description: "+ 3 ATK", 
        emplacement: "1m",
        price: 15,
        buffHp: 0,
        buffAttack: 3,
        buffDefense: 0,
    },
    { name: "Big Hammer (2M)",  
        type: "item",
        description: "+ 6 ATK", 
        emplacement: "2m",
        price: 45,
        buffHp: 0,
        buffAttack: 6,
        buffDefense: 0,
    },
    // Armure/PV
    { name: "Helmet",  
        type: "item",
        description: "+ 12 maxHP", 
        emplacement: "head",
        price: 15,
        buffHp: 12,
        buffAttack: 0,
        buffDefense: 0,
    },
    { name: "Shield",  
        type: "item",
        description: "+ 15 maxHP / + 5 DEF / + 1 ATK", 
        emplacement: "1m",
        price: 30,
        buffHp: 15,
        buffAttack: 1,
        buffDefense: 5,
    },
]

export const CONSOMMABLES = [
    // Potions
    { 
        name: "Minor Health Potion", 
        type: "potion",
        description: "Heal 20pv", 
        healHp: 20,
        price: 7,
    },
    { 
        name: "Medium Health Potion", 
        type: "potion",
        description: "Heal 40pv", 
        healHp: 40,
        price: 12,
    },
    // One-time Spells
    { 
        name: "Exploooosion", 
        type: "potion",
        description: "Deal 50% of attack to all annemies (and you if you have a 2M)", 
        price: 10,
    },
]