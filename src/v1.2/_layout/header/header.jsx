/**
 * 헤더 공통 컴포넌트
 * @param {String} title - 타이틀 
 * @returns React.Component
 */
const LAYOUT_header = ({title}) => {
    return (<React.Fragment>
        <h1><a href="/">{title}</a></h1><span className="version">v{config.nowVersion}</span> 
    </React.Fragment>);
}

/**
 * 헤더 공통 컴포넌트 적용 함수
 * @param {String} title - 타이틀 
 * @returns null
 */
function setHeader(title){
    const $reactRoot = $("#header");
    ReactDOM.render( <LAYOUT_header title={title} /> ,$reactRoot.get(0));
};