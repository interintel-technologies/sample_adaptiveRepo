
import {css} from 'lit-element';

export const ClientElementStyles = css`
.client-carousel h2{
  color: var(--grey-darker);
  display: block;
  font-size: 1rem;
  font-weight: 700;
}
.scroller {
  max-width: 100%;
  padding-top:2rem;
  padding-bottom:2rem;
}

.scroller__inner {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
}

.scroller[data-animated="true"] {
  overflow: hidden;
  -webkit-mask: linear-gradient(
    90deg,
    transparent,
    white 20%,
    white 80%,
    transparent
  );
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-animated="true"] .scroller__inner img{
    width: 200px;
    object-fit: contain;
    height:200px;
    box-shadow: 2px 7px 14px 3px rgba(8, 20, 27, 0.30);
    border-radius:.75rem;
    background-color:var(--md-sys-color-surfaceContainerLowest);
}

.scroller[data-direction="right"] {
  --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}

.scroller[data-speed="fast"] {
  --_animation-duration: 25s;
}

.scroller[data-speed="slow"] {
  --_animation-duration: 60s;
}

.scroller[data-animated="true"] .scroller__inner img:hover {
  transition: 0.3s ease-out;
  transform:scale(1.25);
  cursor:pointer;
  transition: 0.2s;
}
.scroller[data-animated="true"]:hover .scroller__inner {
  animation-play-state: paused;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - 0.5rem));
  }
}
`;
