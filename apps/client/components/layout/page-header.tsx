import css from './layout.module.css';

export interface PageHeaderProps {
  subTitle?: string;
  imgSrc: string;
  imgAlt: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  subTitle,
  imgSrc,
  imgAlt,
  children,
}) => (
  <div className={css['page-header']}>
    <img className={css.img} src={imgSrc} alt={imgAlt} />
    <div className={css.title}>
      <h2>{children}</h2>
      {subTitle && <h5 className={css['sub-title']}>{subTitle}</h5>}
    </div>
  </div>
);
