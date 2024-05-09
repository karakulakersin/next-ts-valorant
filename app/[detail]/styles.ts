import styled from "styled-components";
import { TPageCardProps, TSkillImageProps } from "@/types/pages/agentDetailTypes";

// Ana bileşen divi
export const PageCard = styled.div <TPageCardProps>`
    display: flex;
    flex-direction: column;
    width: 100%; 
    min-height: calc(100vh - 132px); 
    background-color: #f2f2f2;
    padding: 20px;
    background-image: url(${(props) => props.$background});  
    background-size: cover;
    background-position: center; 
    justify-content: center;
    align-items: center; 
    box-sizing: border-box;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

// Sol taraf resim bölümü
export const ImageContainer = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;
// Karakter ismi bileşeni
export const CharacterName = styled.h1`
  font-size: 54px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-top: 10px;
`;
// Resim bileşeni
export const Image= styled.img`
  max-width: 100%;
  height: auto;
  border-radius: .5rem;

  @media (min-width: 768px) {
    width: auto;
    max-width: 100%;
    height: auto;
  }
`;

// Sağ taraf içerik bölümü
export const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

// Başlık bileşeni
export const CardTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

// İçerik bileşeni
export const CardContent = styled.p`
  font-size: 16px;
  color: #666;
`;

// Kart bileşeni
export const SubCard = styled.div`
  background-color: #f9f9f9;
  border-radius: .6rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  padding: 15px;
  margin-top: 20px;
`;

// Kart başlık bileşeni
export const SubCardTitle = styled.h2`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

// Kart içerik bileşeni
export const SubCardContent = styled.p`
    font-size: 16px;
    color: #666;
`;

// Yetenek bileşeni
export const SkillItem = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

// Yetenek resmi
export const SkillImage = styled.img<TSkillImageProps>`
    min-width: 60px;
    background:${(props) => '#' + props.$color};  
    height: 60px;
    border-radius: 50%;
`;

// Yetenek bilgileri
export const SkillInfos = styled.div`
    display: flex;
    margin-left: 1rem;
    flex-direction: column;
    align-items: start;
`
// Yetenek adı
export const SkillName = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 5px;
`;
// Yetenek açıklaması
export const SkillDescription = styled.span`
  font-size: 14px;
  color: #666;
  text-align: start;
`;
