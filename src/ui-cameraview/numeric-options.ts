/** Reading numbers that arrive as numbers or as XML attribute strings. No import: also run by plain node in the tests. */

function toWholeNumber(value: unknown): number | undefined {
    if (typeof value === 'string') {
        if (value.trim() === '') {
            return undefined;
        }
        value = Number(value);
    }
    if (typeof value !== 'number' || !Number.isFinite(value)) {
        return undefined;
    }
    return Math.floor(value);
}

/** A whole number above 0, else -1: "the camera's own choice" (`maxVideoBitrate`, `maxVideoFrameRate`). */
export function parseOptionalPositiveInt(value: unknown): number {
    const whole = toWholeNumber(value);
    return whole !== undefined && whole > 0 ? whole : -1;
}

export const DEFAULT_ANALYSIS_TIMEOUT_MS = 5000;

/** Milliseconds: 0 waits for ever, a positive number is kept, anything else is the default. */
export function parseAnalysisTimeoutMs(value: unknown): number {
    const whole = toWholeNumber(value);
    return whole !== undefined && whole >= 0 ? whole : DEFAULT_ANALYSIS_TIMEOUT_MS;
}
