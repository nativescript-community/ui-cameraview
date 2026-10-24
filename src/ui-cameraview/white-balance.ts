/**
 * The white balances, by the names the native side understands. No import: it is also run
 * by plain node in the tests.
 */
export const WHITE_BALANCES = ['auto', 'daylight', 'cloudy-daylight', 'shade', 'twilight', 'fluorescent', 'incandescent', 'warm-fluorescent'] as const;

export type WhiteBalance = (typeof WHITE_BALANCES)[number];

/** A known name whatever its case, spaces or separator, `auto` for anything else. */
export function parseWhiteBalance(value: unknown): WhiteBalance {
    if (typeof value !== 'string') {
        return 'auto';
    }
    const name = value.trim().toLowerCase().replace(/[\s_]+/g, '-');
    return (WHITE_BALANCES as readonly string[]).includes(name) ? (name as WhiteBalance) : 'auto';
}

/** The JSON array of names the native side returns, with `auto` first and only names that exist. */
export function parseSupportedWhiteBalances(json: string | null | undefined): WhiteBalance[] {
    const result: WhiteBalance[] = ['auto'];
    if (!json) {
        return result;
    }
    let names: unknown;
    try {
        names = JSON.parse(json);
    } catch {
        return result;
    }
    if (!Array.isArray(names)) {
        return result;
    }
    for (const name of names) {
        const known = typeof name === 'string' && (WHITE_BALANCES as readonly string[]).includes(name);
        if (known && !result.includes(name as WhiteBalance)) {
            result.push(name as WhiteBalance);
        }
    }
    return result;
}
