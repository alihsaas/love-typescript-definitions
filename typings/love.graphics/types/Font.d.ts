declare module "love.graphics" {
    import { Type } from "love";
    import { FilterMode } from "love.graphics";

    /**
     * Defines the shape of characters that can be drawn onto the screen.
     * @link [Font](https://love2d.org/wiki/Font)
     */
    export interface Font extends Type<"Font"> {
        /**
         * Gets the ascent of the Font. The ascent spans the distance between the baseline
         * and the top of the glyph that reaches farthest from the baseline.
         * @return ascent, The ascent of the Font in pixels.
         * @link [Font:getAscent](https://love2d.org/wiki/Font:getAscent)
         */
        getAscent(): number;

        /**
         * Gets the baseline of the Font. Most scripts share the notion of a baseline: an
         * imaginary horizontal line on which characters rest. In some scripts, parts of
         * glyphs lie below the baseline.
         * @return baseline, The baseline of the Font in pixels.
         * @link [Font:getBaseline](https://love2d.org/wiki/Font:getBaseline)
         */
        getBaseline(): number;

        /**
         * Gets the DPI scale factor of the Font.
         * @return dpiscale, The DPI scale factor of the Font.
         * @link [Font:getDPIScale](https://love2d.org/wiki/Font:getDPIScale)
         */
        getDPIScale(): number;

        /**
         * Gets the descent of the Font. The descent spans the distance between the
         * baseline and the lowest descending glyph in a typeface.
         * @return descent, The descent of the Font in pixels.
         * @link [Font:getDescent](https://love2d.org/wiki/Font:getDescent)
         */
        getDescent(): number;

        /**
         * Gets the filter mode for a font.
         * @return min, Filter mode used when minifying the font.
         * @return mag, Filter mode used when magnifying the font.
         * @return anisotropy, Maximum amount of anisotropic filtering used.
         * @tupleReturn
         * @link [Font:getFilter](https://love2d.org/wiki/Font:getFilter)
         */
        getFilter(): [FilterMode, FilterMode, number];

        /**
         * Gets the height of the Font. The height of the font is the size including any
         * spacing; the height which it will need.
         * @return height, The height of the Font in pixels.
         * @link [Font:getHeight](https://love2d.org/wiki/Font:getHeight)
         */
        getHeight(): number;

        /**
         * Gets the line height. This will be the value previously set by
         * Font:setLineHeight, or 1.0 by default.
         * @return height, The current line height.
         * @link [Font:getLineHeight](https://love2d.org/wiki/Font:getLineHeight)
         */
        getLineHeight(): number;

        /**
         * Determines the horizontal size a line of text needs. Does not support
         * line-breaks.
         * @param line A line of text.
         * @return width, The width of the line.
         * @link [Font:getWidth](https://love2d.org/wiki/Font:getWidth)
         */
        getWidth(line: string): number;

        /**
         * Gets formatting information for text, given a wrap limit.
         *
         * This export function accounts for newlines correctly (i.e. '\n').
         * @param text The text that will be wrapped.
         * @param wraplimit The maximum width in pixels of each line that text is allowed before wrapping.
         * @return width, The maximum width of the wrapped text.
         * @return wrappedtext, A sequence containing each line of text that was wrapped.
         * @tupleReturn
         * @link [Font:getWrap](https://love2d.org/wiki/Font:getWrap)
         */
        getWrap(text: string, wraplimit: number): [number, Array<string>];

        /**
         * Gets whether the font can render a particular character.
         * @param character A unicode character.
         * @return hasglyph, Whether the font can render the glyph represented by the character.
         * @link [Font:hasGlyphs](https://love2d.org/wiki/Font:hasGlyphs)
         */
        hasGlyphs(character: string): boolean;

        /**
         * Gets whether the font can render a particular character.
         * @param codepoint A unicode codepoint number.
         * @return hasglyph, Whether the font can render the glyph represented by the codepoint number.
         * @link [Font:hasGlyphs](https://love2d.org/wiki/Font:hasGlyphs)
         */
        hasGlyphs(codepoint: number): boolean;

        /**
         * Sets the fallback fonts. When the Font doesn't contain a glyph, it will
         * substitute the glyph from the next subsequent fallback Fonts. This is akin to
         * setting a "font stack" in Cascading Style Sheets (CSS).
         *
         * @param fallbackfonts The fallback fonts in order
         * @param ... Additional fallback Fonts.
         * @link [Font:setFallbacks](https://love2d.org/wiki/Font:setFallbacks)
         * @since 0.10.0
         */
        setFallbacks(...fallbackfonts: Array<Font>): void;

        /**
         * Sets the filter mode for a font.
         *
         * @param min How to scale a font down.
         * @param mag How to scale a font up.
         * @param anisotropy Maximum amount of anisotropic filtering used.
         * @link [Font:setFilter](https://love2d.org/wiki/Font:setFilter)
         */
        setFilter(min: FilterMode, mag?: FilterMode, anisotropy?: number): void;

        /**
         * Sets the line height. When rendering the font in lines the actual height will
         * be determined by the line height multiplied by the height of the font. The
         * default is 1.0.
         *
         * @param height The new line height.
         * @link [Font:setLineHeight](https://love2d.org/wiki/Font:setLineHeight)
         */
        setLineHeight(height: number): void;
    }
}
