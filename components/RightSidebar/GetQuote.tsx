import {Card} from "antd";

export const GetQuote = () => {
  return (
    <div className="right-sidebar__get-quote get-quote">
      <h2>get a quote</h2>
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  )
}