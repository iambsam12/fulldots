import React from 'react';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: brown;
`;

const Loading = () => {

    const { loading } = useParams();

    return <ClipLoader color='#060894' loading={loading} css={override} size={150} />;
};

export default Loading;
