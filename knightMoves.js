export function knightMoves(start, end) {
    const possibleMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    const queue = [[start, [start]]];
    const visited = [];
    visited.push(start);
    while (queue.length > 0) {
        const [current, path] = queue.shift();
        if (current[0] === end[0] && current[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path: ${path.map(p => `[${p[0]},${p[1]}]\n`).join('')}`);
            return path;
        }
        for (const move of possibleMoves) {
            const next = [current[0] + move[0], current[1] + move[1]];
            if (next[0] >= 0 && next[0] < 8 && next[1] >= 0 && next[1] < 8 && !visited.some(v => v[0] === next[0] && v[1] === next[1])) {
                visited.push(next);
                queue.push([next, [...path, next]]);
            }
        }
    }
    return [];
}