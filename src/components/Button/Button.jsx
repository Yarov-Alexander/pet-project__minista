import "./Button.scss"
import classNames from 'classnames'


const Button = (props) => {
    const {
        className,
        type='button',
        href,
        target,
        label,
        isLabelHidden = false,
    } = props

    const isLink = href !== undefined;
    const Component = isLink ? "a" : "button"
    const buttonProps = {type}
    const linkProps = {href, target}
    const specificProps = isLink ? linkProps : buttonProps
    const title = isLabelHidden ? label : undefined


    return (
        <Component
            {...specificProps}
            className={classNames(className, 'button')} 
            aria-label={title}
            title = {title}
        >
            {!isLabelHidden && (
                <span className="button__label">{label}</span>
            )}
        </Component>
    )
}

export default Button