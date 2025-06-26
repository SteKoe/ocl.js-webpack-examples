import ExampleBuilder from "./exampleBuilder.js";

export default class Example {

    public title: string = "";
    public ctx: string = "";
    public oclExpression: string = "";
    public expected: boolean | undefined;
    public fn: Function = () => {
        return {getResult: () => false, getNamesOfFailedInvs: () => []}
    };

    /**
     * @returns {ExampleBuilder}
     */
    static builder() {
        return new ExampleBuilder();
    }

    run() {
        const elemPreJs = document.createElement('pre');
        const elemCodeJs = document.createElement('code');
        elemCodeJs.className = 'javascript';
        elemCodeJs.innerText = this.ctx.trim().replace(/[ ]+/g, ' ');
        elemPreJs.appendChild(elemCodeJs);

        const elemPreOcl = document.createElement('pre');
        const elemCodeOcl = document.createElement('code');
        elemCodeOcl.className = 'ocl';
        elemCodeOcl.innerText = this.oclExpression.trim();
        elemPreOcl.appendChild(elemCodeOcl);

        const elemResult = document.createElement('p');
        if (elemResult) {
            let resultObject = this.fn.apply(this);
            let actual = resultObject.getResult();
            elemResult.innerHTML = `The result of the above rule should ${result(this.expected)} and does ${result(actual)}.`;

            if(this.expected === false && actual === false) {
                const failedInvs = resultObject.getNamesOfFailedInvs().filter((name: string) => name !== 'anonymous');

                if(failedInvs.length > 0) {
                    elemResult.innerHTML += ` The following invariants have failed: ${failedInvs.join(', ')}`
                }
            }
        }

        const elemDivCodeWrapper = document.createElement('div');
        elemDivCodeWrapper.appendChild(elemPreJs);
        elemDivCodeWrapper.appendChild(elemPreOcl);
        elemDivCodeWrapper.appendChild(elemResult);

        const elemDivExampleWrapper = document.createElement('div');
        elemDivExampleWrapper.appendChild(elemDivCodeWrapper);

        return (
            <>
                <h2>{this.title}</h2>
                <div dangerouslySetInnerHTML={{__html: elemDivExampleWrapper.outerHTML}}/>
            </>
        );

        function result(boolean: boolean) {
            const clazz = boolean ? 'pass' : 'not-pass';

            return `<strong class="status ${clazz}">${boolean ? 'PASS' : 'NOT PASS'}</strong>`
        }
    }

    _toggleClass(elem: Element, className: string) {
        let currentClassName = elem.className;
        if (currentClassName.indexOf(className) !== -1) {
            currentClassName = currentClassName.replace(className, '');
        } else {
            currentClassName += ` ${className}`;
        }

        elem.className = currentClassName;
    }
}
