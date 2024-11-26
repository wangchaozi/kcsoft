import Card from "../components/Card/Card";

export default function ContactPage() {
  const obj = {
    url: "/cat.jpeg",
    description: "猫猫神"
  }
    return (
        <div>
        <Card description={obj.description} url={obj.url}></Card>
        <h1>关于我们</h1>
        <p>这里是关于我们的信息。</p>
      </div>
    );
  }