import Card from 'react-bootstrap/Card';

function WithHeaderAndQuoteExample(props) {
  return (
    <Card>
      <Card.Header>Weather Information</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Current temperature in {props.location} is {props.temperature}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;