import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
       
            <ul className={css.statList}>
                {stats.map(stat => (
                    <li className={css.item} key={stat.id}>
                        <span className="label">{ stat.label}</span>
                        <span className="percentage">{ stat.percentage }</span>
                    </li>
                ))}
            
            </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
      }),
    )
}
 