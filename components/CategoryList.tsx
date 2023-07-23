"use client"

import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from 'react';

import { useTransition } from "@/tools";

const StyledCatgoryList = styled.div(({ theme }) => `
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;

  & button {
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.text(10)};
    ${() => useTransition("fill 0.1s", "")};
    border-radius: 100px;
    background-color: ${theme.colors.background(100)};
    ${() => useTransition("fill 0.1s", "")};
  }

  & .active {
    color: ${theme.colors.background()};
    ${() => useTransition("fill 0.1s", "")};
    background-color: ${theme.colors.text()};
    ${() => useTransition("fill 0.1s", "")};
  }
`)


const categories: { title: string; keyword: string }[] = [
  { title: '전체', keyword: '' },
  { title: '개발', keyword: 'dev' },
  { title: '잡담', keyword: 'general' },
]

interface CategoryListProps {
  setSellect: Dispatch<SetStateAction<string>>;
  sellect: string;
}

const CategoryList = ({ setSellect, sellect }: CategoryListProps) => (
  <StyledCatgoryList>
    {categories.map((category) => {
        if (sellect === category.keyword)
          return (
            <button type="button" onClick={() => setSellect(category.keyword === 'All' ? '' : category.keyword)} key={category.keyword} className="select">{category.title}</button>
          );
        return (
          <button type="button" onClick={() => setSellect(category.keyword === 'All' ? '' : category.keyword)} key={category.keyword}>{category.title}</button>
        );
      })}
  </StyledCatgoryList>
)

export default CategoryList;