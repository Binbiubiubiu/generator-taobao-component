export const isMovable = (target, empty) => (target[0] == empty[0] && Math.abs(target[1] - empty[1]) == 1) || (target[1] == empty[1] && Math.abs(target[0] - empty[0]) == 1)

export const isSamePoint = (current, point) => (current[0] != point[0] || current[1] != point[1])

export const isGameOver = (map, rightMap) => {

    for (let i = 0; i < rightMap.length; i++) {
        if (isSamePoint(map[i], rightMap[i])) {
            return false;
        }
    }

    return true;
}

export const randomArr = (arr) => {
    const newArr = [...arr].sort(() => Math.random() > 0.5 ? 1 : -1);
    return isGameOver(newArr,arr)?randomArr(arr):newArr;
};


export const createMap = (level) => {
    let map = [];
    for (let i = 0; i < level; i++) {
        for (let j = 0; j < level; j++) {
            map.push([i, j])
        }
    }
    return map;
}