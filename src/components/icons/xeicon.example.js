import React from 'react';
import XI from './xeicon';

const Example = (props) => {

    return (
        <div style={ {padding: "100px", textAlign: "left"} }>
            <h1>XEIcon Compoent Example</h1>
            <ol>
                <li>
                    index.html에 xeicon을 cdn으로 추가해야 합니다.
                    <pre>&lt;link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css" /></pre>
                </li>
                <li>
                    <a href="https://xpressengine.github.io/XEIcon/library-2.3.3.html">xeicon 사이트</a>를 방문해 사용할 아이콘의 이름 찾아서 복사해서 사용
                    <pre>&lt;XI /><br/>&lt;XI name="github-alt"/><br/>&lt;XI name="xi-piggy-bank"/></pre>
                    <XI size={3} />
                    <XI name="github-alt" size={3} />
                    <XI name="xi-piggy-bank" size={3} />
                </li>
                <li>
                    크기 조절은 size란 prop으로 합니다.
                    <pre>
                        &lt;XI name="book" size={1} /><br/>
                        &lt;XI name="book" size={2} /><br/>
                        &lt;XI name="book" size={3} /><br/>
                        &lt;XI name="book" size={4} /><br/>
                        &lt;XI name="book" size={5} />
                    </pre>
                    <XI name="book" size={1} />
                    <XI name="book" size={2} />
                    <XI name="book" size={3} />
                    <XI name="book" size={4} />
                    <XI name="book" size={5} />
                </li>
                <li>
                    각도 조절은 rotate란 prop으로 합니다
                    <pre>
                        &lt;XI name="android" /><br/>
                        &lt;XI name="android" rotate={90} /><br/>
                        &lt;XI name="android" rotate={180} /><br/>
                        &lt;XI name="android" rotate={270} /><br/>
                    </pre>
                    <XI name="android" size={3} />
                    <XI name="android" size={3} rotate={90} />
                    <XI name="android" size={3} rotate={180} />
                    <XI name="android" size={3} rotate={270} />
                </li>
                <li>
                    수평/수직 반전도 rotate란 prop으로 합니다
                    <pre>
                        &lt;XI name="apple" /><br/>
                        &lt;XI name="apple" flip="h" /><br/>
                        &lt;XI name="apple" flip="v" /><br/>
                    </pre>
                    <XI name="apple" size={3} />
                    <XI name="apple" size={3} flip="h" />
                    <XI name="apple" size={3} flip="v" />
                </li>
                <li>
                    자동회전을 spin란 prop으로 할 수 있습니다.
                    <pre>
                        &lt;XI name="spinner-1" spin /><br/>
                        &lt;XI name="spinner-2" spin /><br/>
                        &lt;XI name="spinner-3" spin /><br/>
                        &lt;XI name="spinner-4" spin /><br/>
                        &lt;XI name="spinner-5" spin /><br/>
                        &lt;XI name="chrome" spin /><br/>
                        &lt;XI name="firefox" spin /><br/>
                        &lt;XI name="edge" spin />
                    </pre>
                    <XI name="spinner-1" size={2} spin/>
                    <XI name="spinner-2" size={2} spin/>
                    <XI name="spinner-3" size={2} spin/>
                    <XI name="spinner-4" size={2} spin/>
                    <XI name="spinner-5" size={2} spin/>
                    <XI name="chrome" size={2} spin/>
                    <XI name="firefox" size={2} spin />
                    <XI name="edge" size={2} spin />
                </li>

                <li>
                    메뉴 등에서 아이콘을 균등한 크기로 만들려면 fw란 prop을 사용합니다.
                    <pre>
                        &lt;XI name="file" fw /><br/>
                        &lt;XI name="folder" fw /><br/>
                        &lt;XI name="man" fw /><br/>
                    </pre>
                    <XI name="file" size={3} fw />
                    <XI name="folder" size={3} fw />
                    <XI name="man" size={3} fw />
                </li>
            </ol>
            
        </div>
    );
}

export default Example;