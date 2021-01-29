import React, { useRef, useEffect } from 'react';
import Card from '../../../commons/components/Card';
import InfoNumber from '../../../commons/components/InfoNumber';

import {
  ChartStyled,
  TitleStyled,
  EmojiStyled,
  ChartInfoStyled,
} from './style';

const VerifiedIncidents = () => {
  const $canvas = useRef(null);

  useEffect(() => {
    const canvas = $canvas.current;
    const ctx = canvas.getContext('2d');
    const x = canvas.width / 2;
    const y = canvas.width / 2;
    const lineWidth = 15;
    const radius = (canvas.width - lineWidth) / 2;
    const lineCap = 'round';

    (function renderFirstCircle (){
      const startAngle = 1 * Math.PI;
      const endAngle = 1.8 * Math.PI;
      const strokeColor = '#743CFF';

      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeColor;
      ctx.lineCap = lineCap;
      ctx.stroke();
    })();

    (function renderSecondCircle (){
      const startAngle = 1.8 * Math.PI;
      const endAngle = 2 * Math.PI;
      const strokeColor = '#E20000';

      ctx.beginPath();
      ctx.arc(x, y, radius, startAngle, endAngle);
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = strokeColor;
      ctx.lineCap = lineCap;
      ctx.stroke();
    })();

  }, []);
  
  return (
    <Card>
      <TitleStyled>
        Incidentes verificados
      </TitleStyled>

      <ChartStyled>
        <canvas 
          width="205"
          className="App-canvas"
          ref={$canvas}
        /> 
        <EmojiStyled>😃</EmojiStyled>
      </ChartStyled>

      <ChartInfoStyled>
        <InfoNumber value="96%" label="Verificados" color="info" />
        <InfoNumber value="4%" label="Verificados" color="error" />
      </ChartInfoStyled>
    </Card>
  );
};

export default VerifiedIncidents;
