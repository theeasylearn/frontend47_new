import Student from './student';
var tdStyle = { padding: '10px', border: '1px solid #ddd' };
export default function Result() {
    let tableStyle = { width: '100%', borderCollapse: 'collapse', fontSize: '16px' };
    let trStyle = { backgroundColor: '#4CAF50', color: 'white' };
    return (<table style={tableStyle}>
        <tr style={trStyle}>
            <th style={tdStyle}>Name</th>
            <th style={tdStyle}>HTML</th>
            <th style={tdStyle}>CSS</th>
            <th style={tdStyle}>JavaScript</th>
        </tr>
        <Student name='Ankit Patel' html='80' css='90' js='95' />
        <Student name='Diya Patel' html='85' css='95' js='90' />
        <Student name='Ram Patel' html='70' css='80' js='85' />
    </table>)
}