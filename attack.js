function getRandom(number) {
    return Math.ceil(Math.random() * number);
}

export function enemyAttack() {
    const hit = ATTACK[getRandom(3) - 1]
    const def = ATTACK[getRandom(3) - 1]

    return {
        value: getRandom(HIT[hit]),
        hit,
        def
    }
}

export function playerAttack() {
    const attack = {}
    for (let item of $form) {
        if (item.checked && item.name === 'hit') {
            attack.value = getRandom(HIT[item.value]);
            attack.hit = item.value
        }
        if (item.checked && item.name === 'defence') {
            attack.def = item.value
        }

        item.checked = false;
    }

    return attack
}