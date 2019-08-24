import {Button, Form} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import baseRequest from "../requests/requests";


const Step1Page = ({history}) => {
  const [dough, setDough] = useState(0)
  const [options, setOptions] = useState([])
  const [suggestion, setSuggestion] = useState(1)

  useEffect(() => {
    (async () => {
      const res = await baseRequest('/getDough')
      const res2 = await baseRequest('/getSuggestion')
      setOptions(res.data)
      setSuggestion(res2.data)
    })()
  }, [dough])

  return (
    <Form id="doughForm" onSubmit={(a) => {
      a.preventDefault()
    }}>
      <Form.Group controlId="doughFormGroup">
        <Form.Label>Selecione a Massa</Form.Label>
        <Form.Control as="select" onChange={(e) => setDough(e.target.value)}>
          {Array.isArray(options )&& options.map((item,index) => <option value={index} key={index}>{item}</option>)}
        </Form.Control>
      </Form.Group>
      <Button onClick={() => baseRequest("/getPoints").then(({data})=>alert(data))}>Recomendação do Milenio: {options[suggestion]}</Button>
      <Button onClick={() => history.push("/2")}>Proximo passo</Button>
    </Form>
  )
}
export default Step1Page

