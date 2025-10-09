var tdStyle = { padding: '10px', border: '1px solid #ddd' };
export default function Student(props) {
    let { name, html, css, js } = props;
    return (<tr>
        <td style={tdStyle}>{name}</td>
        <td style={tdStyle}>{html}</td>
        <td style={tdStyle}>{css}</td>
        <td style={tdStyle}>{js}</td>
    </tr>
    )
}