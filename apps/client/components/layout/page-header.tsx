import scss from './layout.module.scss';

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
  <div className={scss['page-header']}>
    <img className={scss.img} src={imgSrc} alt={imgAlt} />
    <div className={scss.title}>
      <h2>{children}</h2>
      {subTitle && <h5 className={scss['sub-title']}>{subTitle}</h5>}
    </div>
  </div>
);
