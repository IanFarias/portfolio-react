import styled from 'styled-components';
import { HeadingProps } from '.';

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ size, theme }) => theme.sizes[size || 'large']};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${({ transform }) => transform};
`;
