import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// 전역 데이터를 관리할 Context 생성
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 데이터를 가져오는 함수 (API 호출)
  const fetchData = async () => {
    try {
      const response = await axios.get('https://CODELINGO_QUIZ_API_KEY/data'); // API 호출
      setData(response.data); // 가져온 데이터를 상태에 저장
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  // 컴포넌트가 마운트될 때 데이터를 가져옴
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
