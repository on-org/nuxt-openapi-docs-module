import { Marked } from 'marked';
export declare class MarkdownRenderer {
    markedInstance: Marked;
    constructor();
    private configureCustomRenderer;
    private replaceAngleBracketsInText;
    render(text: string): string;
    sanitizeText(text: string): string;
}
