import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from 'react-icons/bs'

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>
          A tua opiniao é muito importante, em breve receberas um cupao de 10% de desconto para a tua proxima compra        
        </p>
        <p>
          Para concluir a tua avaliaçao clica no botao Enviar abaixo.
        </p>
        <h3>Aqui está o resumo da tua avaliaçao: {data.name}</h3>
        <p className="review-data">
          <span>Satisfaçao com o produto:</span>
          {emojiData[data.review]}
        </p>
        <p className="review-data">
          <span>Comentário:</span>
          {data.comment}
        </p>

    </div>
  )
}

export default Thanks