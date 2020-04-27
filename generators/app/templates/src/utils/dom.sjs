const computedStyle = (level, idx, point, backgroundImage) => {
    level =level >1?level:2;
    const size = Math.floor(100 / level);
    return {
        backgroundPosition: `${100 / (level-1) * (idx % level)}% ${100/(level-1) * (~~(idx / level))}%`,
        backgroundSize: `${level * 100}%`,
        transform: `translate(${point[1] * 100}%,${point[0] * 100}%) scale(.94)`,
        width: `${size}%`,
        height: `${size}%`,
        backgroundImage: idx == level * level - 1 ? 'none' : `url(${backgroundImage})`
    }
}

const px = (num)=>typeof num =='number'?`${num}px`:num

export default {
    computedStyle,
    px
}