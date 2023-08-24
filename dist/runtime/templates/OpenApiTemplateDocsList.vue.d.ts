declare namespace _default {
    const name: string;
    function data(): {
        files: boolean;
        pathDoc: string;
    };
    namespace methods {
        function genUrl(path: any): string;
    }
}
export default _default;
