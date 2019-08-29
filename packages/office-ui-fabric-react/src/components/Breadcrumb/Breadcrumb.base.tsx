import * as React from 'react';
import { BaseComponent, getRTL, classNamesFunction, getNativeProps, htmlElementProperties } from '../../Utilities';
import { IProcessedStyleSet } from '../../Styling';
import { FocusZone, FocusZoneDirection } from '../../FocusZone';
import { Link } from '../../Link';
import { Icon } from '../../Icon';
import { IconButton } from '../../Button';
import { IBreadcrumbProps, IBreadcrumbItem, IDividerAsProps, IBreadcrumbData } from './Breadcrumb.types';
import { DirectionalHint } from '../../common/DirectionalHint';
import { ResizeGroup } from '../../ResizeGroup';
import { TooltipHost, TooltipOverflowMode } from '../../Tooltip';
import { IBreadcrumbStyleProps, IBreadcrumbStyles } from './Breadcrumb.types';

/** @deprecated Use IBreadcrumbData */
export type IBreadCrumbData = IBreadcrumbData;

const getClassNames = classNamesFunction<IBreadcrumbStyleProps, IBreadcrumbStyles>();

const OVERFLOW_KEY = 'overflow';
const OVERFLOW_KEY1 = 'overflow';
const OVERFLOW_KEY2 = 'overflow';
const OVERFLOW_KEY3 = 'overflow';
const OVERFLOW_KEY4 = 'overflow';
const OVERFLOW_KEY5 = 'overflow';
const OVERFLOW_KEY6 = 'overflow';
const OVERFLOW_KEY7 = 'overflow';
const OVERFLOW_KEY8 = 'overflow';
const OVERFLOW_KEY9 = 'overflow';
const OVERFLOW_KEY21 = 'overflow';
const OVERFLOW_KEY22 = 'overflow';
const OVERFLOW_KEY23 = 'overflow';
const OVERFLOW_KEY24 = 'overflow';
const OVERFLOW_KEY25 = 'overflow';
const OVERFLOW_KEY26 = 'overflow';
const OVERFLOW_KEY27 = 'overflow';
const OVERFLOW_KEY28 = 'overflow';
const OVERFLOW_KEY29 = 'overflow';
const OVERFLOW_KEY31 = 'overflow';
const OVERFLOW_KEY32 = 'overflow';
const OVERFLOW_KEY33 = 'overflow';
const OVERFLOW_KEY34 = 'overflow';
const OVERFLOW_KEY35 = 'overflow';
const OVERFLOW_KEY36 = 'overflow';
const OVERFLOW_KEY37 = 'overflow';
const OVERFLOW_KEY38 = 'overflow';
const OVERFLOW_KEY39 = 'overflow';
const OVERFLOW_KEY41 = 'overflow';
const OVERFLOW_KEY42 = 'overflow';
const OVERFLOW_KEY43 = 'overflow';
const OVERFLOW_KEY44 = 'overflow';
const OVERFLOW_KEY45 = 'overflow';
const OVERFLOW_KEY46 = 'overflow';
const OVERFLOW_KEY47 = 'overflow';
const OVERFLOW_KEY48 = 'overflow';
const OVERFLOW_KEY49 = 'overflow';

const nullFunction = (): null => null;

/**
 * {@docCategory Breadcrumb}
 */
export class BreadcrumbBase extends BaseComponent<IBreadcrumbProps, any> {
  public static defaultProps: IBreadcrumbProps = {
    items: [],
    maxDisplayedItems: 999,
    overflowIndex: 0
  };

  private _classNames: IProcessedStyleSet<IBreadcrumbStyles>;
  private _focusZone = React.createRef<FocusZone>();

  constructor(props: IBreadcrumbProps) {
    super(props);

    this._validateProps(props);
  }

  /**
   * Sets focus to the first breadcrumb link.
   */
  public focus(): void {
    if (this._focusZone.current) {
      this._focusZone.current.focus();
    }
  }

  public render(): JSX.Element {
    this._validateProps(this.props);

    const { onReduceData = this._onReduceData, overflowIndex, maxDisplayedItems, items, className, theme, styles } = this.props;
    const renderedItems = [...items];
    const renderedOverflowItems = renderedItems.splice(overflowIndex!, renderedItems.length - maxDisplayedItems!);
    const breadcrumbData: IBreadcrumbData = {
      props: this.props,
      renderedItems,
      renderedOverflowItems
    };

    this._classNames = getClassNames(styles, {
      className,
      theme: theme!
    });

    return <ResizeGroup onRenderData={this._onRenderBreadcrumb} onReduceData={onReduceData} data={breadcrumbData} />;
  }

  private _onReduceData = (data: IBreadcrumbData): IBreadcrumbData | undefined => {
    let { renderedItems, renderedOverflowItems } = data;
    const { overflowIndex } = data.props;

    const movedItem = renderedItems[overflowIndex!];
    renderedItems = [...renderedItems];
    renderedItems.splice(overflowIndex!, 1);

    renderedOverflowItems = [...renderedOverflowItems, movedItem];

    if (movedItem !== undefined) {
      return { ...data, renderedItems, renderedOverflowItems };
    }
  };

  private _onRenderBreadcrumb = (data: IBreadcrumbData) => {
    const {
      ariaLabel,
      dividerAs: DividerType = Icon as React.ReactType<IDividerAsProps>,
      onRenderItem = this._onRenderItem,
      overflowAriaLabel,
      overflowIndex
    } = data.props;
    const { renderedOverflowItems, renderedItems } = data;

    const contextualItems = renderedOverflowItems.map((item, index) => ({
      name: item.text,
      key: item.key,
      onClick: item.onClick ? this._onBreadcrumbClicked.bind(this, item) : null,
      href: item.href
    }));

    // Find index of last rendered item so the divider icon
    // knows not to render on that item
    const lastItemIndex = renderedItems.length - 1;
    const hasOverflowItems = renderedOverflowItems && renderedOverflowItems.length !== 0;

    const itemElements: JSX.Element[] = renderedItems.map((item, index) => (
      <li className={this._classNames.listItem} key={item.key || String(index)}>
        {onRenderItem(item, this._onRenderItem)}
        {(index !== lastItemIndex || (hasOverflowItems && index === overflowIndex! - 1)) && (
          <DividerType className={this._classNames.chevron} iconName={getRTL() ? 'ChevronLeft' : 'ChevronRight'} item={item} />
        )}
      </li>
    ));

    if (hasOverflowItems) {
      itemElements.splice(
        overflowIndex!,
        0,
        <li className={this._classNames.overflow} key={OVERFLOW_KEY}>
          <IconButton
            className={this._classNames.overflowButton}
            iconProps={{ iconName: 'More' }}
            role="button"
            aria-haspopup="true"
            ariaLabel={overflowAriaLabel}
            onRenderMenuIcon={nullFunction}
            menuProps={{
              items: contextualItems,
              directionalHint: DirectionalHint.bottomLeftEdge
            }}
          />
          {overflowIndex !== lastItemIndex + 1 && (
            <DividerType
              className={this._classNames.chevron}
              iconName={getRTL() ? 'ChevronLeft' : 'ChevronRight'}
              item={renderedOverflowItems[renderedOverflowItems.length - 1]}
            />
          )}
        </li>
      );
    }

    const nativeProps = getNativeProps<React.HTMLAttributes<HTMLDivElement>>(this.props, htmlElementProperties, ['className']);

    return (
      <div className={this._classNames.root} role="navigation" aria-label={ariaLabel} {...nativeProps}>
        <FocusZone componentRef={this._focusZone} direction={FocusZoneDirection.horizontal} {...this.props.focusZoneProps}>
          <ol className={this._classNames.list}>{itemElements}</ol>
        </FocusZone>
      </div>
    );
  };

  private _onRenderItem = (item: IBreadcrumbItem) => {
    if (item.onClick || item.href) {
      return (
        <Link
          as={'a'}
          className={this._classNames.itemLink}
          href={item.href}
          aria-current={item.isCurrentItem ? 'page' : undefined}
          onClick={this._onBreadcrumbClicked.bind(this, item)}
        >
          <TooltipHost content={item.text} overflowMode={TooltipOverflowMode.Parent} {...this.props.tooltipHostProps}>
            {item.text}
          </TooltipHost>
        </Link>
      );
    } else {
      return (
        <span className={this._classNames.item}>
          <TooltipHost content={item.text} overflowMode={TooltipOverflowMode.Parent} {...this.props.tooltipHostProps}>
            {item.text}
          </TooltipHost>
        </span>
      );
    }
  };

  private _onBreadcrumbClicked = (item: IBreadcrumbItem, ev: React.MouseEvent<HTMLElement>) => {
    if (item.onClick) {
      item.onClick(ev, item);
    }
  };

  /**
   * Validate incoming props
   * @param props - Props to validate
   */
  private _validateProps(props: IBreadcrumbProps): void {
    const { maxDisplayedItems, overflowIndex, items } = props;
    if (
      overflowIndex! < 0 ||
      (maxDisplayedItems! > 1 && overflowIndex! > maxDisplayedItems! - 1) ||
      (items.length > 0 && overflowIndex! > items.length - 1)
    ) {
      throw new Error('Breadcrumb: overflowIndex out of range');
    }
  }
}
