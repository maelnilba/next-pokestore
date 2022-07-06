export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Decimal: any;
  HTML: any;
  JSON: any;
  Money: any;
  URL: any;
};

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 *
 */
export type ShopifyApiVersion = {
  __typename?: 'ApiVersion';
  /** The human-readable name of the version. */
  displayName: Scalars['String'];
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String'];
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars['Boolean'];
};

/** Details about the gift card used on the checkout. */
export type ShopifyAppliedGiftCard = ShopifyNode & {
  __typename?: 'AppliedGiftCard';
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsedV2` instead
   */
  amountUsed: Scalars['Money'];
  /** The amount that was taken from the gift card by applying it. */
  amountUsedV2: ShopifyMoneyV2;
  /**
   * The amount left on the gift card.
   * @deprecated Use `balanceV2` instead
   */
  balance: Scalars['Money'];
  /** The amount left on the gift card. */
  balanceV2: ShopifyMoneyV2;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String'];
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: ShopifyMoneyV2;
};

/** An article in an online store blog. */
export type ShopifyArticle = ShopifyHasMetafields & ShopifyNode & ShopifyOnlineStorePublishable & {
  __typename?: 'Article';
  /**
   * The article's author.
   * @deprecated Use `authorV2` instead
   */
  author: ShopifyArticleAuthor;
  /** The article's author. */
  authorV2?: Maybe<ShopifyArticleAuthor>;
  /** The blog that the article belongs to. */
  blog: ShopifyBlog;
  /** List of comments posted on the article. */
  comments: ShopifyCommentConnection;
  /** Stripped content of the article, single line with HTML tags removed. */
  content: Scalars['String'];
  /** The content of the article, complete with HTML formatting. */
  contentHtml: Scalars['HTML'];
  /** Stripped excerpt of the article, single line with HTML tags removed. */
  excerpt?: Maybe<Scalars['String']>;
  /** The excerpt of the article, complete with HTML formatting. */
  excerptHtml?: Maybe<Scalars['HTML']>;
  /**
   * A human-friendly unique string for the Article automatically generated from its title.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image associated with the article. */
  image?: Maybe<ShopifyImage>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyMetafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyMetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** The date and time when the article was published. */
  publishedAt: Scalars['DateTime'];
  /** The article’s SEO information. */
  seo?: Maybe<ShopifySeo>;
  /** A categorization that a article can be tagged with. */
  tags: Array<Scalars['String']>;
  /** The article’s name. */
  title: Scalars['String'];
};


/** An article in an online store blog. */
export type ShopifyArticleCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An article in an online store blog. */
export type ShopifyArticleContentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** An article in an online store blog. */
export type ShopifyArticleExcerptArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** An article in an online store blog. */
export type ShopifyArticleMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An article in an online store blog. */
export type ShopifyArticleMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** The author of an article. */
export type ShopifyArticleAuthor = {
  __typename?: 'ArticleAuthor';
  /** The author's bio. */
  bio?: Maybe<Scalars['String']>;
  /** The author’s email. */
  email: Scalars['String'];
  /** The author's first name. */
  firstName: Scalars['String'];
  /** The author's last name. */
  lastName: Scalars['String'];
  /** The author's full name. */
  name: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple Articles.
 *
 */
export type ShopifyArticleConnection = {
  __typename?: 'ArticleConnection';
  /** A list of edges. */
  edges: Array<ShopifyArticleEdge>;
  /** A list of the nodes contained in ArticleEdge. */
  nodes: Array<ShopifyArticle>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 *
 */
export type ShopifyArticleEdge = {
  __typename?: 'ArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ArticleEdge. */
  node: ShopifyArticle;
};

/** The set of valid sort keys for the Article query. */
export enum ShopifyArticleSortKeys {
  /** Sort by the `author` value. */
  Author = 'AUTHOR',
  /** Sort by the `blog_title` value. */
  BlogTitle = 'BLOG_TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT'
}

/** Represents a generic custom attribute. */
export type ShopifyAttribute = {
  __typename?: 'Attribute';
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>;
};

/** Specifies the input fields required for an attribute. */
export type ShopifyAttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String'];
  /** Value of the attribute. */
  value: Scalars['String'];
};

/**
 * Automatic discount applications capture the intentions of a discount that was automatically applied.
 *
 */
export type ShopifyAutomaticDiscountApplication = ShopifyDiscountApplication & {
  __typename?: 'AutomaticDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: ShopifyDiscountApplicationAllocationMethod;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: ShopifyDiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: ShopifyDiscountApplicationTargetType;
  /** The title of the application. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: ShopifyPricingValue;
};

/** A collection of available shipping rates for a checkout. */
export type ShopifyAvailableShippingRates = {
  __typename?: 'AvailableShippingRates';
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   *
   */
  ready: Scalars['Boolean'];
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe<Array<ShopifyShippingRate>>;
};

/** An online store blog. */
export type ShopifyBlog = ShopifyHasMetafields & ShopifyNode & ShopifyOnlineStorePublishable & {
  __typename?: 'Blog';
  /** Find an article by its handle. */
  articleByHandle?: Maybe<ShopifyArticle>;
  /** List of the blog's articles. */
  articles: ShopifyArticleConnection;
  /** The authors who have contributed to the blog. */
  authors: Array<ShopifyArticleAuthor>;
  /**
   * A human-friendly unique string for the Blog automatically generated from its title.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyMetafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyMetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** The blog's SEO information. */
  seo?: Maybe<ShopifySeo>;
  /** The blogs’s title. */
  title: Scalars['String'];
};


/** An online store blog. */
export type ShopifyBlogArticleByHandleArgs = {
  handle: Scalars['String'];
};


/** An online store blog. */
export type ShopifyBlogArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyArticleSortKeys>;
};


/** An online store blog. */
export type ShopifyBlogMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An online store blog. */
export type ShopifyBlogMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An auto-generated type for paginating through multiple Blogs.
 *
 */
export type ShopifyBlogConnection = {
  __typename?: 'BlogConnection';
  /** A list of edges. */
  edges: Array<ShopifyBlogEdge>;
  /** A list of the nodes contained in BlogEdge. */
  nodes: Array<ShopifyBlog>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one Blog and a cursor during pagination.
 *
 */
export type ShopifyBlogEdge = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of BlogEdge. */
  node: ShopifyBlog;
};

/** The set of valid sort keys for the Blog query. */
export enum ShopifyBlogSortKeys {
  /** Sort by the `handle` value. */
  Handle = 'HANDLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE'
}

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export enum ShopifyCardBrand {
  /** American Express. */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Diners Club. */
  DinersClub = 'DINERS_CLUB',
  /** Discover. */
  Discover = 'DISCOVER',
  /** JCB. */
  Jcb = 'JCB',
  /** Mastercard. */
  Mastercard = 'MASTERCARD',
  /** Visa. */
  Visa = 'VISA'
}

/** A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart. To learn how to interact with a cart during a customer's session, refer to [Manage a cart with the Storefront API](https://shopify.dev/api/examples/cart). */
export type ShopifyCart = ShopifyNode & {
  __typename?: 'Cart';
  /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
  attributes: Array<ShopifyAttribute>;
  /** Information about the buyer that is interacting with the cart. */
  buyerIdentity: ShopifyCartBuyerIdentity;
  /** The URL of the checkout for the cart. */
  checkoutUrl: Scalars['URL'];
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime'];
  /** The delivery groups available for the cart, based on the default address of the logged-in customer. */
  deliveryGroups: ShopifyCartDeliveryGroupConnection;
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   */
  discountCodes: Array<ShopifyCartDiscountCode>;
  /**
   * The estimated costs that the buyer will pay at checkout. The estimated costs are subject to change and changes will be reflected at checkout. The `estimatedCost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-cart).
   * @deprecated Use `cost` instead
   */
  estimatedCost: ShopifyCartEstimatedCost;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A list of lines containing information about the items the customer intends to purchase. */
  lines: ShopifyCartLineConnection;
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: Maybe<Scalars['String']>;
  /** The date and time when the cart was updated. */
  updatedAt: Scalars['DateTime'];
};


/** A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart. To learn how to interact with a cart during a customer's session, refer to [Manage a cart with the Storefront API](https://shopify.dev/api/examples/cart). */
export type ShopifyCartDeliveryGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A cart represents the merchandise that a buyer intends to purchase, and the estimated cost associated with the cart. To learn how to interact with a cart during a customer's session, refer to [Manage a cart with the Storefront API](https://shopify.dev/api/examples/cart). */
export type ShopifyCartLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Return type for `cartAttributesUpdate` mutation. */
export type ShopifyCartAttributesUpdatePayload = {
  __typename?: 'CartAttributesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<ShopifyCart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyCartUserError>;
};

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export type ShopifyCartAutomaticDiscountAllocation = ShopifyCartDiscountAllocation & {
  __typename?: 'CartAutomaticDiscountAllocation';
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: ShopifyMoneyV2;
  /** The title of the allocated discount. */
  title: Scalars['String'];
};

/** Represents information about the buyer that is interacting with the cart. */
export type ShopifyCartBuyerIdentity = {
  __typename?: 'CartBuyerIdentity';
  /** The country where the buyer is located. */
  countryCode?: Maybe<ShopifyCountryCode>;
  /** The customer account associated with the cart. */
  customer?: Maybe<ShopifyCustomer>;
  /** The email address of the buyer that is interacting with the cart. */
  email?: Maybe<Scalars['String']>;
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: Maybe<Scalars['String']>;
};

/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine
 * [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-checkout)
 * and should match the customer's shipping address.
 *
 */
export type ShopifyCartBuyerIdentityInput = {
  /** The country where the buyer is located. */
  countryCode?: InputMaybe<ShopifyCountryCode>;
  /** The access token used to identify the customer associated with the cart. */
  customerAccessToken?: InputMaybe<Scalars['String']>;
  /** The email address of the buyer that is interacting with the cart. */
  email?: InputMaybe<Scalars['String']>;
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: InputMaybe<Scalars['String']>;
};

/** Return type for `cartBuyerIdentityUpdate` mutation. */
export type ShopifyCartBuyerIdentityUpdatePayload = {
  __typename?: 'CartBuyerIdentityUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<ShopifyCart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyCartUserError>;
};

/** The discount that has been applied to the cart line using a discount code. */
export type ShopifyCartCodeDiscountAllocation = ShopifyCartDiscountAllocation & {
  __typename?: 'CartCodeDiscountAllocation';
  /** The code used to apply the discount. */
  code: Scalars['String'];
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: ShopifyMoneyV2;
};

/** Return type for `cartCreate` mutation. */
export type ShopifyCartCreatePayload = {
  __typename?: 'CartCreatePayload';
  /** The new cart. */
  cart?: Maybe<ShopifyCart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyCartUserError>;
};

/** Information about the options available for one or more line items to be delivered to a specific address. */
export type ShopifyCartDeliveryGroup = {
  __typename?: 'CartDeliveryGroup';
  /** A list of cart lines for the delivery group. */
  cartLines: ShopifyCartLineConnection;
  /** The destination address for the delivery group. */
  deliveryAddress: ShopifyMailingAddress;
  /** The delivery options available for the delivery group. */
  deliveryOptions: Array<ShopifyCartDeliveryOption>;
  /** The ID for the delivery group. */
  id: Scalars['ID'];
};


/** Information about the options available for one or more line items to be delivered to a specific address. */
export type ShopifyCartDeliveryGroupCartLinesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An auto-generated type for paginating through multiple CartDeliveryGroups.
 *
 */
export type ShopifyCartDeliveryGroupConnection = {
  __typename?: 'CartDeliveryGroupConnection';
  /** A list of edges. */
  edges: Array<ShopifyCartDeliveryGroupEdge>;
  /** A list of the nodes contained in CartDeliveryGroupEdge. */
  nodes: Array<ShopifyCartDeliveryGroup>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination.
 *
 */
export type ShopifyCartDeliveryGroupEdge = {
  __typename?: 'CartDeliveryGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CartDeliveryGroupEdge. */
  node: ShopifyCartDeliveryGroup;
};

/** Information about a delivery option. */
export type ShopifyCartDeliveryOption = {
  __typename?: 'CartDeliveryOption';
  /** The code of the delivery option. */
  code?: Maybe<Scalars['String']>;
  /** The method for the delivery option. */
  deliveryMethodType: ShopifyDeliveryMethodType;
  /** The description of the delivery option. */
  description?: Maybe<Scalars['String']>;
  /** The estimated cost for the delivery option. */
  estimatedCost: ShopifyMoneyV2;
  /** The title of the delivery option. */
  title?: Maybe<Scalars['String']>;
};

/** The discounts that have been applied to the cart line. */
export type ShopifyCartDiscountAllocation = {
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: ShopifyMoneyV2;
};

/** The discount codes applied to the cart. */
export type ShopifyCartDiscountCode = {
  __typename?: 'CartDiscountCode';
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars['Boolean'];
  /** The code for the discount. */
  code: Scalars['String'];
};

/** Return type for `cartDiscountCodesUpdate` mutation. */
export type ShopifyCartDiscountCodesUpdatePayload = {
  __typename?: 'CartDiscountCodesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<ShopifyCart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyCartUserError>;
};

/** Possible error codes that can be returned by `CartUserError`. */
export enum ShopifyCartErrorCode {
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Merchandise line was not found in cart. */
  InvalidMerchandiseLine = 'INVALID_MERCHANDISE_LINE',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** Missing discount code. */
  MissingDiscountCode = 'MISSING_DISCOUNT_CODE',
  /** Missing note. */
  MissingNote = 'MISSING_NOTE'
}

/**
 * The estimated costs that the buyer will pay at checkout.
 * It uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine
 * [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-cart).
 *
 */
export type ShopifyCartEstimatedCost = {
  __typename?: 'CartEstimatedCost';
  /** The estimated amount, before taxes and discounts, for the customer to pay. */
  subtotalAmount: ShopifyMoneyV2;
  /** The estimated total amount for the customer to pay. */
  totalAmount: ShopifyMoneyV2;
  /** The estimated duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<ShopifyMoneyV2>;
  /** The estimated tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<ShopifyMoneyV2>;
};

/** Specifies the input fields to create a cart. */
export type ShopifyCartInput = {
  /** An array of key-value pairs that contains additional information about the cart. */
  attributes?: InputMaybe<Array<ShopifyAttributeInput>>;
  /** The customer associated with the cart. Used to determine [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-checkout). Buyer identity should match the customer's shipping address. */
  buyerIdentity?: InputMaybe<ShopifyCartBuyerIdentityInput>;
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   */
  discountCodes?: InputMaybe<Array<Scalars['String']>>;
  /** A list of merchandise lines to add to the cart. */
  lines?: InputMaybe<Array<ShopifyCartLineInput>>;
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: InputMaybe<Scalars['String']>;
};

/** Represents information about the merchandise in the cart. */
export type ShopifyCartLine = ShopifyNode & {
  __typename?: 'CartLine';
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<ShopifyAttribute>;
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<ShopifyCartDiscountAllocation>;
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead
   */
  estimatedCost: ShopifyCartLineEstimatedCost;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The merchandise that the buyer intends to purchase. */
  merchandise: ShopifyMerchandise;
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int'];
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<ShopifySellingPlanAllocation>;
};

/**
 * An auto-generated type for paginating through multiple CartLines.
 *
 */
export type ShopifyCartLineConnection = {
  __typename?: 'CartLineConnection';
  /** A list of edges. */
  edges: Array<ShopifyCartLineEdge>;
  /** A list of the nodes contained in CartLineEdge. */
  nodes: Array<ShopifyCartLine>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one CartLine and a cursor during pagination.
 *
 */
export type ShopifyCartLineEdge = {
  __typename?: 'CartLineEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CartLineEdge. */
  node: ShopifyCartLine;
};

/** The estimated cost of the merchandise line that the buyer will pay at checkout. */
export type ShopifyCartLineEstimatedCost = {
  __typename?: 'CartLineEstimatedCost';
  /** The estimated cost of the merchandise line before discounts. */
  subtotalAmount: ShopifyMoneyV2;
  /** The estimated total cost of the merchandise line. */
  totalAmount: ShopifyMoneyV2;
};

/** Specifies the input fields to create a merchandise line on a cart. */
export type ShopifyCartLineInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<ShopifyAttributeInput>>;
  /** The identifier of the merchandise that the buyer intends to purchase. */
  merchandiseId: Scalars['ID'];
  /** The quantity of the merchandise. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>;
};

/** Specifies the input fields to update a line item on a cart. */
export type ShopifyCartLineUpdateInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<ShopifyAttributeInput>>;
  /** The identifier of the merchandise line. */
  id: Scalars['ID'];
  /** The identifier of the merchandise for the line item. */
  merchandiseId?: InputMaybe<Scalars['ID']>;
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>;
};

/** Return type for `cartLinesAdd` mutation. */
export type ShopifyCartLinesAddPayload = {
  __typename?: 'CartLinesAddPayload';
  /** The updated cart. */
  cart?: Maybe<ShopifyCart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyCartUserError>;
};

/** Return type for `cartLinesRemove` mutation. */
export type ShopifyCartLinesRemovePayload = {
  __typename?: 'CartLinesRemovePayload';
  /** The updated cart. */
  cart?: Maybe<ShopifyCart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyCartUserError>;
};

/** Return type for `cartLinesUpdate` mutation. */
export type ShopifyCartLinesUpdatePayload = {
  __typename?: 'CartLinesUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<ShopifyCart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyCartUserError>;
};

/** Return type for `cartNoteUpdate` mutation. */
export type ShopifyCartNoteUpdatePayload = {
  __typename?: 'CartNoteUpdatePayload';
  /** The updated cart. */
  cart?: Maybe<ShopifyCart>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyCartUserError>;
};

/** Represents an error that happens during execution of a cart mutation. */
export type ShopifyCartUserError = ShopifyDisplayableError & {
  __typename?: 'CartUserError';
  /** The error code. */
  code?: Maybe<ShopifyCartErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A container for all the information required to checkout items and pay. */
export type ShopifyCheckout = ShopifyNode & {
  __typename?: 'Checkout';
  /** The gift cards used on the checkout. */
  appliedGiftCards: Array<ShopifyAppliedGiftCard>;
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   *
   */
  availableShippingRates?: Maybe<ShopifyAvailableShippingRates>;
  /** The identity of the customer associated with the checkout. */
  buyerIdentity: ShopifyCheckoutBuyerIdentity;
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** The date and time when the checkout was created. */
  createdAt: Scalars['DateTime'];
  /** The currency code for the checkout. */
  currencyCode: ShopifyCurrencyCode;
  /** A list of extra information that is added to the checkout. */
  customAttributes: Array<ShopifyAttribute>;
  /** Discounts that have been applied on the checkout. */
  discountApplications: ShopifyDiscountApplicationConnection;
  /** The email attached to this checkout. */
  email?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: ShopifyCheckoutLineItemConnection;
  /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: ShopifyMoneyV2;
  /** The note associated with the checkout. */
  note?: Maybe<Scalars['String']>;
  /** The resulting order from a paid checkout. */
  order?: Maybe<ShopifyOrder>;
  /** The Order Status Page for this Checkout, null when checkout is not completed. */
  orderStatusUrl?: Maybe<Scalars['URL']>;
  /**
   * The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.
   * @deprecated Use `paymentDueV2` instead
   */
  paymentDue: Scalars['Money'];
  /** The amount left to be paid. This is equal to the cost of the line items, duties, taxes and shipping minus discounts and gift cards. */
  paymentDueV2: ShopifyMoneyV2;
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   *
   */
  ready: Scalars['Boolean'];
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean'];
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<ShopifyMailingAddress>;
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<ShopifyDiscountAllocation>;
  /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
  shippingLine?: Maybe<ShopifyShippingRate>;
  /**
   * Price of the checkout before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice: Scalars['Money'];
  /** Price of the checkout before duties, shipping and taxes. */
  subtotalPriceV2: ShopifyMoneyV2;
  /** Whether the checkout is tax exempt. */
  taxExempt: Scalars['Boolean'];
  /** Whether taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars['Boolean'];
  /** The sum of all the duties applied to the line items in the checkout. */
  totalDuties?: Maybe<ShopifyMoneyV2>;
  /**
   * The sum of all the prices of all the items in the checkout, taxes and discounts included.
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: Scalars['Money'];
  /** The sum of all the prices of all the items in the checkout, duties, taxes and discounts included. */
  totalPriceV2: ShopifyMoneyV2;
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax: Scalars['Money'];
  /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
  totalTaxV2: ShopifyMoneyV2;
  /** The date and time when the checkout was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The url pointing to the checkout accessible from the web. */
  webUrl: Scalars['URL'];
};


/** A container for all the information required to checkout items and pay. */
export type ShopifyCheckoutDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A container for all the information required to checkout items and pay. */
export type ShopifyCheckoutLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Specifies the fields required to update a checkout's attributes. */
export type ShopifyCheckoutAttributesUpdateInput = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<ShopifyAttributeInput>>;
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>;
};

/** Return type for `checkoutAttributesUpdate` mutation. */
export type ShopifyCheckoutAttributesUpdatePayload = {
  __typename?: 'CheckoutAttributesUpdatePayload';
  /** The updated checkout object. */
  checkout: ShopifyCheckout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Specifies the fields required to update a checkout's attributes. */
export type ShopifyCheckoutAttributesUpdateV2Input = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<ShopifyAttributeInput>>;
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>;
};

/** Return type for `checkoutAttributesUpdateV2` mutation. */
export type ShopifyCheckoutAttributesUpdateV2Payload = {
  __typename?: 'CheckoutAttributesUpdateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** The identity of the customer associated with the checkout. */
export type ShopifyCheckoutBuyerIdentity = {
  __typename?: 'CheckoutBuyerIdentity';
  /** The country code for the checkout. For example, `CA`. */
  countryCode?: Maybe<ShopifyCountryCode>;
};

/** Specifies the identity of the customer associated with the checkout. */
export type ShopifyCheckoutBuyerIdentityInput = {
  /**
   * The country code of one of the shop's
   * [enabled countries](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).
   * For example, `CA`. Including this field creates a checkout in the specified country's currency.
   *
   */
  countryCode: ShopifyCountryCode;
};

/** Return type for `checkoutCompleteFree` mutation. */
export type ShopifyCheckoutCompleteFreePayload = {
  __typename?: 'CheckoutCompleteFreePayload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutCompleteWithCreditCard` mutation. */
export type ShopifyCheckoutCompleteWithCreditCardPayload = {
  __typename?: 'CheckoutCompleteWithCreditCardPayload';
  /** The checkout on which the payment was applied. */
  checkout: ShopifyCheckout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<ShopifyPayment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
export type ShopifyCheckoutCompleteWithCreditCardV2Payload = {
  __typename?: 'CheckoutCompleteWithCreditCardV2Payload';
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<ShopifyPayment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutCompleteWithTokenizedPayment` mutation. */
export type ShopifyCheckoutCompleteWithTokenizedPaymentPayload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentPayload';
  /** The checkout on which the payment was applied. */
  checkout: ShopifyCheckout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<ShopifyPayment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutCompleteWithTokenizedPaymentV2` mutation. */
export type ShopifyCheckoutCompleteWithTokenizedPaymentV2Payload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV2Payload';
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<ShopifyPayment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation. */
export type ShopifyCheckoutCompleteWithTokenizedPaymentV3Payload = {
  __typename?: 'CheckoutCompleteWithTokenizedPaymentV3Payload';
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /** A representation of the attempted payment. */
  payment?: Maybe<ShopifyPayment>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Specifies the fields required to create a checkout. */
export type ShopifyCheckoutCreateInput = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of addresses is still done at completion time. Defaults to `null`.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>;
  /** The identity of the customer associated with the checkout. */
  buyerIdentity?: InputMaybe<ShopifyCheckoutBuyerIdentityInput>;
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<ShopifyAttributeInput>>;
  /** The email with which the customer wants to checkout. */
  email?: InputMaybe<Scalars['String']>;
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems?: InputMaybe<Array<ShopifyCheckoutLineItemInput>>;
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>;
  /**
   * The three-letter currency code of one of the shop's enabled presentment currencies.
   * Including this field creates a checkout in the specified currency. By default, new
   * checkouts are created in the shop's primary currency.
   *  This argument is deprecated: Use `country` field instead.
   */
  presentmentCurrencyCode?: InputMaybe<ShopifyCurrencyCode>;
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: InputMaybe<ShopifyMailingAddressInput>;
};

/** Return type for `checkoutCreate` mutation. */
export type ShopifyCheckoutCreatePayload = {
  __typename?: 'CheckoutCreatePayload';
  /** The new checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /** The checkout queue token. Available only to selected stores. */
  queueToken?: Maybe<Scalars['String']>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutCustomerAssociate` mutation. */
export type ShopifyCheckoutCustomerAssociatePayload = {
  __typename?: 'CheckoutCustomerAssociatePayload';
  /** The updated checkout object. */
  checkout: ShopifyCheckout;
  /** The associated customer object. */
  customer?: Maybe<ShopifyCustomer>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutCustomerAssociateV2` mutation. */
export type ShopifyCheckoutCustomerAssociateV2Payload = {
  __typename?: 'CheckoutCustomerAssociateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /** The associated customer object. */
  customer?: Maybe<ShopifyCustomer>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutCustomerDisassociate` mutation. */
export type ShopifyCheckoutCustomerDisassociatePayload = {
  __typename?: 'CheckoutCustomerDisassociatePayload';
  /** The updated checkout object. */
  checkout: ShopifyCheckout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutCustomerDisassociateV2` mutation. */
export type ShopifyCheckoutCustomerDisassociateV2Payload = {
  __typename?: 'CheckoutCustomerDisassociateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutDiscountCodeApply` mutation. */
export type ShopifyCheckoutDiscountCodeApplyPayload = {
  __typename?: 'CheckoutDiscountCodeApplyPayload';
  /** The updated checkout object. */
  checkout: ShopifyCheckout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
export type ShopifyCheckoutDiscountCodeApplyV2Payload = {
  __typename?: 'CheckoutDiscountCodeApplyV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutDiscountCodeRemove` mutation. */
export type ShopifyCheckoutDiscountCodeRemovePayload = {
  __typename?: 'CheckoutDiscountCodeRemovePayload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutEmailUpdate` mutation. */
export type ShopifyCheckoutEmailUpdatePayload = {
  __typename?: 'CheckoutEmailUpdatePayload';
  /** The checkout object with the updated email. */
  checkout: ShopifyCheckout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutEmailUpdateV2` mutation. */
export type ShopifyCheckoutEmailUpdateV2Payload = {
  __typename?: 'CheckoutEmailUpdateV2Payload';
  /** The checkout object with the updated email. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Possible error codes that can be returned by `CheckoutUserError`. */
export enum ShopifyCheckoutErrorCode {
  /** Checkout is already completed. */
  AlreadyCompleted = 'ALREADY_COMPLETED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** The input value is blank. */
  Blank = 'BLANK',
  /** Cart does not meet discount requirements notice. */
  CartDoesNotMeetDiscountRequirementsNotice = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  /** Customer already used once per customer discount notice. */
  CustomerAlreadyUsedOncePerCustomerDiscountNotice = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  /** Discount already applied. */
  DiscountAlreadyApplied = 'DISCOUNT_ALREADY_APPLIED',
  /** Discount disabled. */
  DiscountDisabled = 'DISCOUNT_DISABLED',
  /** Discount expired. */
  DiscountExpired = 'DISCOUNT_EXPIRED',
  /** Discount limit reached. */
  DiscountLimitReached = 'DISCOUNT_LIMIT_REACHED',
  /** Discount not found. */
  DiscountNotFound = 'DISCOUNT_NOT_FOUND',
  /** Checkout is already completed. */
  Empty = 'EMPTY',
  /** Queue token has expired. */
  ExpiredQueueToken = 'EXPIRED_QUEUE_TOKEN',
  /** Gift card has already been applied. */
  GiftCardAlreadyApplied = 'GIFT_CARD_ALREADY_APPLIED',
  /** Gift card code is invalid. */
  GiftCardCodeInvalid = 'GIFT_CARD_CODE_INVALID',
  /** Gift card currency does not match checkout currency. */
  GiftCardCurrencyMismatch = 'GIFT_CARD_CURRENCY_MISMATCH',
  /** Gift card has no funds left. */
  GiftCardDepleted = 'GIFT_CARD_DEPLETED',
  /** Gift card is disabled. */
  GiftCardDisabled = 'GIFT_CARD_DISABLED',
  /** Gift card is expired. */
  GiftCardExpired = 'GIFT_CARD_EXPIRED',
  /** Gift card was not found. */
  GiftCardNotFound = 'GIFT_CARD_NOT_FOUND',
  /** Gift card cannot be applied to a checkout that contains a gift card. */
  GiftCardUnusable = 'GIFT_CARD_UNUSABLE',
  /** The input value should be greater than or equal to the minimum value allowed. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Cannot specify country and presentment currency code. */
  InvalidCountryAndCurrency = 'INVALID_COUNTRY_AND_CURRENCY',
  /** Input Zip is invalid for country provided. */
  InvalidForCountry = 'INVALID_FOR_COUNTRY',
  /** Input Zip is invalid for country and province provided. */
  InvalidForCountryAndProvince = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  /** Invalid province in country. */
  InvalidProvinceInCountry = 'INVALID_PROVINCE_IN_COUNTRY',
  /** Queue token is invalid. */
  InvalidQueueToken = 'INVALID_QUEUE_TOKEN',
  /** Invalid region in country. */
  InvalidRegionInCountry = 'INVALID_REGION_IN_COUNTRY',
  /** Invalid state in country. */
  InvalidStateInCountry = 'INVALID_STATE_IN_COUNTRY',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** The input value should be less than or equal to the maximum value allowed. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Line item was not found in checkout. */
  LineItemNotFound = 'LINE_ITEM_NOT_FOUND',
  /** Checkout is locked. */
  Locked = 'LOCKED',
  /** Missing payment input. */
  MissingPaymentInput = 'MISSING_PAYMENT_INPUT',
  /** Not enough in stock. */
  NotEnoughInStock = 'NOT_ENOUGH_IN_STOCK',
  /** Input value is not supported. */
  NotSupported = 'NOT_SUPPORTED',
  /** The input value needs to be blank. */
  Present = 'PRESENT',
  /** Shipping rate expired. */
  ShippingRateExpired = 'SHIPPING_RATE_EXPIRED',
  /** Throttled during checkout. */
  ThrottledDuringCheckout = 'THROTTLED_DURING_CHECKOUT',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The amount of the payment does not match the value to be paid. */
  TotalPriceMismatch = 'TOTAL_PRICE_MISMATCH',
  /** Unable to apply discount. */
  UnableToApply = 'UNABLE_TO_APPLY'
}

/** Return type for `checkoutGiftCardApply` mutation. */
export type ShopifyCheckoutGiftCardApplyPayload = {
  __typename?: 'CheckoutGiftCardApplyPayload';
  /** The updated checkout object. */
  checkout: ShopifyCheckout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutGiftCardRemove` mutation. */
export type ShopifyCheckoutGiftCardRemovePayload = {
  __typename?: 'CheckoutGiftCardRemovePayload';
  /** The updated checkout object. */
  checkout: ShopifyCheckout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutGiftCardRemoveV2` mutation. */
export type ShopifyCheckoutGiftCardRemoveV2Payload = {
  __typename?: 'CheckoutGiftCardRemoveV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutGiftCardsAppend` mutation. */
export type ShopifyCheckoutGiftCardsAppendPayload = {
  __typename?: 'CheckoutGiftCardsAppendPayload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** A single line item in the checkout, grouped by variant and attributes. */
export type ShopifyCheckoutLineItem = ShopifyNode & {
  __typename?: 'CheckoutLineItem';
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes: Array<ShopifyAttribute>;
  /** The discounts that have been allocated onto the checkout line item by discount applications. */
  discountAllocations: Array<ShopifyDiscountAllocation>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The quantity of the line item. */
  quantity: Scalars['Int'];
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars['String'];
  /** Unit price of the line item. */
  unitPrice?: Maybe<ShopifyMoneyV2>;
  /** Product variant of the line item. */
  variant?: Maybe<ShopifyProductVariant>;
};

/**
 * An auto-generated type for paginating through multiple CheckoutLineItems.
 *
 */
export type ShopifyCheckoutLineItemConnection = {
  __typename?: 'CheckoutLineItemConnection';
  /** A list of edges. */
  edges: Array<ShopifyCheckoutLineItemEdge>;
  /** A list of the nodes contained in CheckoutLineItemEdge. */
  nodes: Array<ShopifyCheckoutLineItem>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.
 *
 */
export type ShopifyCheckoutLineItemEdge = {
  __typename?: 'CheckoutLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CheckoutLineItemEdge. */
  node: ShopifyCheckoutLineItem;
};

/** Specifies the input fields to create a line item on a checkout. */
export type ShopifyCheckoutLineItemInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<ShopifyAttributeInput>>;
  /** The quantity of the line item. */
  quantity: Scalars['Int'];
  /** The identifier of the product variant for the line item. */
  variantId: Scalars['ID'];
};

/** Specifies the input fields to update a line item on the checkout. */
export type ShopifyCheckoutLineItemUpdateInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<ShopifyAttributeInput>>;
  /** The identifier of the line item. */
  id?: InputMaybe<Scalars['ID']>;
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>;
  /** The variant identifier of the line item. */
  variantId?: InputMaybe<Scalars['ID']>;
};

/** Return type for `checkoutLineItemsAdd` mutation. */
export type ShopifyCheckoutLineItemsAddPayload = {
  __typename?: 'CheckoutLineItemsAddPayload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutLineItemsRemove` mutation. */
export type ShopifyCheckoutLineItemsRemovePayload = {
  __typename?: 'CheckoutLineItemsRemovePayload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutLineItemsReplace` mutation. */
export type ShopifyCheckoutLineItemsReplacePayload = {
  __typename?: 'CheckoutLineItemsReplacePayload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyCheckoutUserError>;
};

/** Return type for `checkoutLineItemsUpdate` mutation. */
export type ShopifyCheckoutLineItemsUpdatePayload = {
  __typename?: 'CheckoutLineItemsUpdatePayload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutShippingAddressUpdate` mutation. */
export type ShopifyCheckoutShippingAddressUpdatePayload = {
  __typename?: 'CheckoutShippingAddressUpdatePayload';
  /** The updated checkout object. */
  checkout: ShopifyCheckout;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
export type ShopifyCheckoutShippingAddressUpdateV2Payload = {
  __typename?: 'CheckoutShippingAddressUpdateV2Payload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `checkoutShippingLineUpdate` mutation. */
export type ShopifyCheckoutShippingLineUpdatePayload = {
  __typename?: 'CheckoutShippingLineUpdatePayload';
  /** The updated checkout object. */
  checkout?: Maybe<ShopifyCheckout>;
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<ShopifyCheckoutUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Represents an error that happens during execution of a checkout mutation. */
export type ShopifyCheckoutUserError = ShopifyDisplayableError & {
  __typename?: 'CheckoutUserError';
  /** The error code. */
  code?: Maybe<ShopifyCheckoutErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ShopifyCollection = ShopifyHasMetafields & ShopifyNode & ShopifyOnlineStorePublishable & {
  __typename?: 'Collection';
  /** Stripped description of the collection, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML'];
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Image associated with the collection. */
  image?: Maybe<ShopifyImage>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyMetafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyMetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** List of products in the collection. */
  products: ShopifyProductConnection;
  /** The collection's SEO information. */
  seo: ShopifySeo;
  /** The collection’s name. Limit of 255 characters. */
  title: Scalars['String'];
  /** The date and time when the collection was last modified. */
  updatedAt: Scalars['DateTime'];
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ShopifyCollectionDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ShopifyCollectionMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ShopifyCollectionMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type ShopifyCollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<ShopifyProductFilter>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyProductCollectionSortKeys>;
};

/**
 * An auto-generated type for paginating through multiple Collections.
 *
 */
export type ShopifyCollectionConnection = {
  __typename?: 'CollectionConnection';
  /** A list of edges. */
  edges: Array<ShopifyCollectionEdge>;
  /** A list of the nodes contained in CollectionEdge. */
  nodes: Array<ShopifyCollection>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 *
 */
export type ShopifyCollectionEdge = {
  __typename?: 'CollectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CollectionEdge. */
  node: ShopifyCollection;
};

/** The set of valid sort keys for the Collection query. */
export enum ShopifyCollectionSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT'
}

/** A comment on an article. */
export type ShopifyComment = ShopifyNode & {
  __typename?: 'Comment';
  /** The comment’s author. */
  author: ShopifyCommentAuthor;
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars['String'];
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['HTML'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};


/** A comment on an article. */
export type ShopifyCommentContentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};

/** The author of a comment. */
export type ShopifyCommentAuthor = {
  __typename?: 'CommentAuthor';
  /** The author's email. */
  email: Scalars['String'];
  /** The author’s name. */
  name: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple Comments.
 *
 */
export type ShopifyCommentConnection = {
  __typename?: 'CommentConnection';
  /** A list of edges. */
  edges: Array<ShopifyCommentEdge>;
  /** A list of the nodes contained in CommentEdge. */
  nodes: Array<ShopifyComment>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 *
 */
export type ShopifyCommentEdge = {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of CommentEdge. */
  node: ShopifyComment;
};

/** A country. */
export type ShopifyCountry = {
  __typename?: 'Country';
  /** The languages available for the country. */
  availableLanguages: Array<ShopifyLanguage>;
  /** The currency of the country. */
  currency: ShopifyCurrency;
  /** The ISO code of the country. */
  isoCode: ShopifyCountryCode;
  /** The name of the country. */
  name: Scalars['String'];
  /** The unit system used in the country. */
  unitSystem: ShopifyUnitSystem;
};

/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 *
 */
export enum ShopifyCountryCode {
  /** Ascension Island. */
  Ac = 'AC',
  /** Andorra. */
  Ad = 'AD',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** Afghanistan. */
  Af = 'AF',
  /** Antigua & Barbuda. */
  Ag = 'AG',
  /** Anguilla. */
  Ai = 'AI',
  /** Albania. */
  Al = 'AL',
  /** Armenia. */
  Am = 'AM',
  /** Netherlands Antilles. */
  An = 'AN',
  /** Angola. */
  Ao = 'AO',
  /** Argentina. */
  Ar = 'AR',
  /** Austria. */
  At = 'AT',
  /** Australia. */
  Au = 'AU',
  /** Aruba. */
  Aw = 'AW',
  /** Åland Islands. */
  Ax = 'AX',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bosnia & Herzegovina. */
  Ba = 'BA',
  /** Barbados. */
  Bb = 'BB',
  /** Bangladesh. */
  Bd = 'BD',
  /** Belgium. */
  Be = 'BE',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Bulgaria. */
  Bg = 'BG',
  /** Bahrain. */
  Bh = 'BH',
  /** Burundi. */
  Bi = 'BI',
  /** Benin. */
  Bj = 'BJ',
  /** St. Barthélemy. */
  Bl = 'BL',
  /** Bermuda. */
  Bm = 'BM',
  /** Brunei. */
  Bn = 'BN',
  /** Bolivia. */
  Bo = 'BO',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Brazil. */
  Br = 'BR',
  /** Bahamas. */
  Bs = 'BS',
  /** Bhutan. */
  Bt = 'BT',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Botswana. */
  Bw = 'BW',
  /** Belarus. */
  By = 'BY',
  /** Belize. */
  Bz = 'BZ',
  /** Canada. */
  Ca = 'CA',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Congo - Kinshasa. */
  Cd = 'CD',
  /** Central African Republic. */
  Cf = 'CF',
  /** Congo - Brazzaville. */
  Cg = 'CG',
  /** Switzerland. */
  Ch = 'CH',
  /** Côte d’Ivoire. */
  Ci = 'CI',
  /** Cook Islands. */
  Ck = 'CK',
  /** Chile. */
  Cl = 'CL',
  /** Cameroon. */
  Cm = 'CM',
  /** China. */
  Cn = 'CN',
  /** Colombia. */
  Co = 'CO',
  /** Costa Rica. */
  Cr = 'CR',
  /** Cuba. */
  Cu = 'CU',
  /** Cape Verde. */
  Cv = 'CV',
  /** Curaçao. */
  Cw = 'CW',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cyprus. */
  Cy = 'CY',
  /** Czechia. */
  Cz = 'CZ',
  /** Germany. */
  De = 'DE',
  /** Djibouti. */
  Dj = 'DJ',
  /** Denmark. */
  Dk = 'DK',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Algeria. */
  Dz = 'DZ',
  /** Ecuador. */
  Ec = 'EC',
  /** Estonia. */
  Ee = 'EE',
  /** Egypt. */
  Eg = 'EG',
  /** Western Sahara. */
  Eh = 'EH',
  /** Eritrea. */
  Er = 'ER',
  /** Spain. */
  Es = 'ES',
  /** Ethiopia. */
  Et = 'ET',
  /** Finland. */
  Fi = 'FI',
  /** Fiji. */
  Fj = 'FJ',
  /** Falkland Islands. */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** France. */
  Fr = 'FR',
  /** Gabon. */
  Ga = 'GA',
  /** United Kingdom. */
  Gb = 'GB',
  /** Grenada. */
  Gd = 'GD',
  /** Georgia. */
  Ge = 'GE',
  /** French Guiana. */
  Gf = 'GF',
  /** Guernsey. */
  Gg = 'GG',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greenland. */
  Gl = 'GL',
  /** Gambia. */
  Gm = 'GM',
  /** Guinea. */
  Gn = 'GN',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Greece. */
  Gr = 'GR',
  /** South Georgia & South Sandwich Islands. */
  Gs = 'GS',
  /** Guatemala. */
  Gt = 'GT',
  /** Guinea-Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Hong Kong SAR. */
  Hk = 'HK',
  /** Heard & McDonald Islands. */
  Hm = 'HM',
  /** Honduras. */
  Hn = 'HN',
  /** Croatia. */
  Hr = 'HR',
  /** Haiti. */
  Ht = 'HT',
  /** Hungary. */
  Hu = 'HU',
  /** Indonesia. */
  Id = 'ID',
  /** Ireland. */
  Ie = 'IE',
  /** Israel. */
  Il = 'IL',
  /** Isle of Man. */
  Im = 'IM',
  /** India. */
  In = 'IN',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Iraq. */
  Iq = 'IQ',
  /** Iran. */
  Ir = 'IR',
  /** Iceland. */
  Is = 'IS',
  /** Italy. */
  It = 'IT',
  /** Jersey. */
  Je = 'JE',
  /** Jamaica. */
  Jm = 'JM',
  /** Jordan. */
  Jo = 'JO',
  /** Japan. */
  Jp = 'JP',
  /** Kenya. */
  Ke = 'KE',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Cambodia. */
  Kh = 'KH',
  /** Kiribati. */
  Ki = 'KI',
  /** Comoros. */
  Km = 'KM',
  /** St. Kitts & Nevis. */
  Kn = 'KN',
  /** North Korea. */
  Kp = 'KP',
  /** South Korea. */
  Kr = 'KR',
  /** Kuwait. */
  Kw = 'KW',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Laos. */
  La = 'LA',
  /** Lebanon. */
  Lb = 'LB',
  /** St. Lucia. */
  Lc = 'LC',
  /** Liechtenstein. */
  Li = 'LI',
  /** Sri Lanka. */
  Lk = 'LK',
  /** Liberia. */
  Lr = 'LR',
  /** Lesotho. */
  Ls = 'LS',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Latvia. */
  Lv = 'LV',
  /** Libya. */
  Ly = 'LY',
  /** Morocco. */
  Ma = 'MA',
  /** Monaco. */
  Mc = 'MC',
  /** Moldova. */
  Md = 'MD',
  /** Montenegro. */
  Me = 'ME',
  /** St. Martin. */
  Mf = 'MF',
  /** Madagascar. */
  Mg = 'MG',
  /** North Macedonia. */
  Mk = 'MK',
  /** Mali. */
  Ml = 'ML',
  /** Myanmar (Burma). */
  Mm = 'MM',
  /** Mongolia. */
  Mn = 'MN',
  /** Macao SAR. */
  Mo = 'MO',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Montserrat. */
  Ms = 'MS',
  /** Malta. */
  Mt = 'MT',
  /** Mauritius. */
  Mu = 'MU',
  /** Maldives. */
  Mv = 'MV',
  /** Malawi. */
  Mw = 'MW',
  /** Mexico. */
  Mx = 'MX',
  /** Malaysia. */
  My = 'MY',
  /** Mozambique. */
  Mz = 'MZ',
  /** Namibia. */
  Na = 'NA',
  /** New Caledonia. */
  Nc = 'NC',
  /** Niger. */
  Ne = 'NE',
  /** Norfolk Island. */
  Nf = 'NF',
  /** Nigeria. */
  Ng = 'NG',
  /** Nicaragua. */
  Ni = 'NI',
  /** Netherlands. */
  Nl = 'NL',
  /** Norway. */
  No = 'NO',
  /** Nepal. */
  Np = 'NP',
  /** Nauru. */
  Nr = 'NR',
  /** Niue. */
  Nu = 'NU',
  /** New Zealand. */
  Nz = 'NZ',
  /** Oman. */
  Om = 'OM',
  /** Panama. */
  Pa = 'PA',
  /** Peru. */
  Pe = 'PE',
  /** French Polynesia. */
  Pf = 'PF',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Philippines. */
  Ph = 'PH',
  /** Pakistan. */
  Pk = 'PK',
  /** Poland. */
  Pl = 'PL',
  /** St. Pierre & Miquelon. */
  Pm = 'PM',
  /** Pitcairn Islands. */
  Pn = 'PN',
  /** Palestinian Territories. */
  Ps = 'PS',
  /** Portugal. */
  Pt = 'PT',
  /** Paraguay. */
  Py = 'PY',
  /** Qatar. */
  Qa = 'QA',
  /** Réunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Serbia. */
  Rs = 'RS',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Seychelles. */
  Sc = 'SC',
  /** Sudan. */
  Sd = 'SD',
  /** Sweden. */
  Se = 'SE',
  /** Singapore. */
  Sg = 'SG',
  /** St. Helena. */
  Sh = 'SH',
  /** Slovenia. */
  Si = 'SI',
  /** Svalbard & Jan Mayen. */
  Sj = 'SJ',
  /** Slovakia. */
  Sk = 'SK',
  /** Sierra Leone. */
  Sl = 'SL',
  /** San Marino. */
  Sm = 'SM',
  /** Senegal. */
  Sn = 'SN',
  /** Somalia. */
  So = 'SO',
  /** Suriname. */
  Sr = 'SR',
  /** South Sudan. */
  Ss = 'SS',
  /** São Tomé & Príncipe. */
  St = 'ST',
  /** El Salvador. */
  Sv = 'SV',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Syria. */
  Sy = 'SY',
  /** Eswatini. */
  Sz = 'SZ',
  /** Tristan da Cunha. */
  Ta = 'TA',
  /** Turks & Caicos Islands. */
  Tc = 'TC',
  /** Chad. */
  Td = 'TD',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Togo. */
  Tg = 'TG',
  /** Thailand. */
  Th = 'TH',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tokelau. */
  Tk = 'TK',
  /** Timor-Leste. */
  Tl = 'TL',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Tunisia. */
  Tn = 'TN',
  /** Tonga. */
  To = 'TO',
  /** Turkey. */
  Tr = 'TR',
  /** Trinidad & Tobago. */
  Tt = 'TT',
  /** Tuvalu. */
  Tv = 'TV',
  /** Taiwan. */
  Tw = 'TW',
  /** Tanzania. */
  Tz = 'TZ',
  /** Ukraine. */
  Ua = 'UA',
  /** Uganda. */
  Ug = 'UG',
  /** U.S. Outlying Islands. */
  Um = 'UM',
  /** United States. */
  Us = 'US',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vatican City. */
  Va = 'VA',
  /** St. Vincent & Grenadines. */
  Vc = 'VC',
  /** Venezuela. */
  Ve = 'VE',
  /** British Virgin Islands. */
  Vg = 'VG',
  /** Vietnam. */
  Vn = 'VN',
  /** Vanuatu. */
  Vu = 'VU',
  /** Wallis & Futuna. */
  Wf = 'WF',
  /** Samoa. */
  Ws = 'WS',
  /** Kosovo. */
  Xk = 'XK',
  /** Yemen. */
  Ye = 'YE',
  /** Mayotte. */
  Yt = 'YT',
  /** South Africa. */
  Za = 'ZA',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW',
  /** Unknown Region. */
  Zz = 'ZZ'
}

/** Credit card information used for a payment. */
export type ShopifyCreditCard = {
  __typename?: 'CreditCard';
  /** The brand of the credit card. */
  brand?: Maybe<Scalars['String']>;
  /** The expiry month of the credit card. */
  expiryMonth?: Maybe<Scalars['Int']>;
  /** The expiry year of the credit card. */
  expiryYear?: Maybe<Scalars['Int']>;
  /** The credit card's BIN number. */
  firstDigits?: Maybe<Scalars['String']>;
  /** The first name of the card holder. */
  firstName?: Maybe<Scalars['String']>;
  /** The last 4 digits of the credit card. */
  lastDigits?: Maybe<Scalars['String']>;
  /** The last name of the card holder. */
  lastName?: Maybe<Scalars['String']>;
  /** The masked credit card number with only the last 4 digits displayed. */
  maskedNumber?: Maybe<Scalars['String']>;
};

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 *
 */
export type ShopifyCreditCardPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money'];
  /** The billing address for the payment. */
  billingAddress: ShopifyMailingAddressInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>;
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String'];
};

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 *
 */
export type ShopifyCreditCardPaymentInputV2 = {
  /** The billing address for the payment. */
  billingAddress: ShopifyMailingAddressInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** The amount and currency of the payment. */
  paymentAmount: ShopifyMoneyInput;
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>;
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String'];
};

/** The part of the image that should remain after cropping. */
export enum ShopifyCropRegion {
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT',
  /** Keep the top of the image. */
  Top = 'TOP'
}

/** A currency. */
export type ShopifyCurrency = {
  __typename?: 'Currency';
  /** The ISO code of the currency. */
  isoCode: ShopifyCurrencyCode;
  /** The name of the currency. */
  name: Scalars['String'];
  /** The symbol of the currency. */
  symbol: Scalars['String'];
};

/**
 * The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
export enum ShopifyCurrencyCode {
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Belarusian Ruble (BYN). */
  Byn = 'BYN',
  /**
   * Belarusian Ruble (BYR).
   * @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.
   */
  Byr = 'BYR',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Eritrean Nakfa (ERN). */
  Ern = 'ERN',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Kiribati Dollar (KID). */
  Kid = 'KID',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Mauritanian Ouguiya (MRU). */
  Mru = 'MRU',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Somali Shilling (SOS). */
  Sos = 'SOS',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /**
   * Sao Tome And Principe Dobra (STD).
   * @deprecated `STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.
   */
  Std = 'STD',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /**
   * Venezuelan Bolivares (VEF).
   * @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.
   */
  Vef = 'VEF',
  /** Venezuelan Bolivares (VES). */
  Ves = 'VES',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Unrecognized currency. */
  Xxx = 'XXX',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW'
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ShopifyCustomer = ShopifyHasMetafields & {
  __typename?: 'Customer';
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars['Boolean'];
  /** A list of addresses for the customer. */
  addresses: ShopifyMailingAddressConnection;
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime'];
  /** The customer’s default address. */
  defaultAddress?: Maybe<ShopifyMailingAddress>;
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String'];
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']>;
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>;
  /** A unique identifier for the customer. */
  id: Scalars['ID'];
  /** The customer's most recently updated, incomplete checkout. */
  lastIncompleteCheckout?: Maybe<ShopifyCheckout>;
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyMetafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyMetafieldConnection;
  /** The orders associated with the customer. */
  orders: ShopifyOrderConnection;
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']>;
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   *
   */
  tags: Array<Scalars['String']>;
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ShopifyCustomerAddressesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ShopifyCustomerMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ShopifyCustomerMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type ShopifyCustomerOrdersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyOrderSortKeys>;
};

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export type ShopifyCustomerAccessToken = {
  __typename?: 'CustomerAccessToken';
  /** The customer’s access token. */
  accessToken: Scalars['String'];
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime'];
};

/** Specifies the input fields required to create a customer access token. */
export type ShopifyCustomerAccessTokenCreateInput = {
  /** The email associated to the customer. */
  email: Scalars['String'];
  /** The login password to be used by the customer. */
  password: Scalars['String'];
};

/** Return type for `customerAccessTokenCreate` mutation. */
export type ShopifyCustomerAccessTokenCreatePayload = {
  __typename?: 'CustomerAccessTokenCreatePayload';
  /** The newly created customer access token object. */
  customerAccessToken?: Maybe<ShopifyCustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
export type ShopifyCustomerAccessTokenCreateWithMultipassPayload = {
  __typename?: 'CustomerAccessTokenCreateWithMultipassPayload';
  /** An access token object associated with the customer. */
  customerAccessToken?: Maybe<ShopifyCustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
};

/** Return type for `customerAccessTokenDelete` mutation. */
export type ShopifyCustomerAccessTokenDeletePayload = {
  __typename?: 'CustomerAccessTokenDeletePayload';
  /** The destroyed access token. */
  deletedAccessToken?: Maybe<Scalars['String']>;
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `customerAccessTokenRenew` mutation. */
export type ShopifyCustomerAccessTokenRenewPayload = {
  __typename?: 'CustomerAccessTokenRenewPayload';
  /** The renewed customer access token object. */
  customerAccessToken?: Maybe<ShopifyCustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `customerActivateByUrl` mutation. */
export type ShopifyCustomerActivateByUrlPayload = {
  __typename?: 'CustomerActivateByUrlPayload';
  /** The customer that was activated. */
  customer?: Maybe<ShopifyCustomer>;
  /** A new customer access token for the customer. */
  customerAccessToken?: Maybe<ShopifyCustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
};

/** Specifies the input fields required to activate a customer. */
export type ShopifyCustomerActivateInput = {
  /** The activation token required to activate the customer. */
  activationToken: Scalars['String'];
  /** New password that will be set during activation. */
  password: Scalars['String'];
};

/** Return type for `customerActivate` mutation. */
export type ShopifyCustomerActivatePayload = {
  __typename?: 'CustomerActivatePayload';
  /** The customer object. */
  customer?: Maybe<ShopifyCustomer>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<ShopifyCustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `customerAddressCreate` mutation. */
export type ShopifyCustomerAddressCreatePayload = {
  __typename?: 'CustomerAddressCreatePayload';
  /** The new customer address object. */
  customerAddress?: Maybe<ShopifyMailingAddress>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `customerAddressDelete` mutation. */
export type ShopifyCustomerAddressDeletePayload = {
  __typename?: 'CustomerAddressDeletePayload';
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /** ID of the deleted customer address. */
  deletedCustomerAddressId?: Maybe<Scalars['String']>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `customerAddressUpdate` mutation. */
export type ShopifyCustomerAddressUpdatePayload = {
  __typename?: 'CustomerAddressUpdatePayload';
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<ShopifyMailingAddress>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** The fields required to create a new customer. */
export type ShopifyCustomerCreateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>;
  /** The customer’s email. */
  email: Scalars['String'];
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** The login password used by the customer. */
  password: Scalars['String'];
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>;
};

/** Return type for `customerCreate` mutation. */
export type ShopifyCustomerCreatePayload = {
  __typename?: 'CustomerCreatePayload';
  /** The created customer object. */
  customer?: Maybe<ShopifyCustomer>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `customerDefaultAddressUpdate` mutation. */
export type ShopifyCustomerDefaultAddressUpdatePayload = {
  __typename?: 'CustomerDefaultAddressUpdatePayload';
  /** The updated customer object. */
  customer?: Maybe<ShopifyCustomer>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Possible error codes that can be returned by `CustomerUserError`. */
export enum ShopifyCustomerErrorCode {
  /** Customer already enabled. */
  AlreadyEnabled = 'ALREADY_ENABLED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** The input value is blank. */
  Blank = 'BLANK',
  /** Input contains HTML tags. */
  ContainsHtmlTags = 'CONTAINS_HTML_TAGS',
  /** Input contains URL. */
  ContainsUrl = 'CONTAINS_URL',
  /** Customer is disabled. */
  CustomerDisabled = 'CUSTOMER_DISABLED',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Multipass token is not valid. */
  InvalidMultipassRequest = 'INVALID_MULTIPASS_REQUEST',
  /** Address does not exist. */
  NotFound = 'NOT_FOUND',
  /** Input password starts or ends with whitespace. */
  PasswordStartsOrEndsWithWhitespace = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  /** The input value is already taken. */
  Taken = 'TAKEN',
  /** Invalid activation token. */
  TokenInvalid = 'TOKEN_INVALID',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unidentified customer. */
  UnidentifiedCustomer = 'UNIDENTIFIED_CUSTOMER'
}

/** Return type for `customerRecover` mutation. */
export type ShopifyCustomerRecoverPayload = {
  __typename?: 'CustomerRecoverPayload';
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Return type for `customerResetByUrl` mutation. */
export type ShopifyCustomerResetByUrlPayload = {
  __typename?: 'CustomerResetByUrlPayload';
  /** The customer object which was reset. */
  customer?: Maybe<ShopifyCustomer>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<ShopifyCustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Specifies the fields required to reset a customer’s password. */
export type ShopifyCustomerResetInput = {
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String'];
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String'];
};

/** Return type for `customerReset` mutation. */
export type ShopifyCustomerResetPayload = {
  __typename?: 'CustomerResetPayload';
  /** The customer object which was reset. */
  customer?: Maybe<ShopifyCustomer>;
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<ShopifyCustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Specifies the fields required to update the Customer information. */
export type ShopifyCustomerUpdateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>;
  /** The customer’s email. */
  email?: InputMaybe<Scalars['String']>;
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>;
  /** The login password used by the customer. */
  password?: InputMaybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   *
   */
  phone?: InputMaybe<Scalars['String']>;
};

/** Return type for `customerUpdate` mutation. */
export type ShopifyCustomerUpdatePayload = {
  __typename?: 'CustomerUpdatePayload';
  /** The updated customer object. */
  customer?: Maybe<ShopifyCustomer>;
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   *
   */
  customerAccessToken?: Maybe<ShopifyCustomerAccessToken>;
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<ShopifyCustomerUserError>;
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<ShopifyUserError>;
};

/** Represents an error that happens during execution of a customer mutation. */
export type ShopifyCustomerUserError = ShopifyDisplayableError & {
  __typename?: 'CustomerUserError';
  /** The error code. */
  code?: Maybe<ShopifyCustomerErrorCode>;
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** List of different delivery method types. */
export enum ShopifyDeliveryMethodType {
  /** Local Delivery. */
  Local = 'LOCAL',
  /** None. */
  None = 'NONE',
  /** Shipping to a Pickup Point. */
  PickupPoint = 'PICKUP_POINT',
  /** Local Pickup. */
  PickUp = 'PICK_UP',
  /** Retail. */
  Retail = 'RETAIL',
  /** Shipping. */
  Shipping = 'SHIPPING'
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum ShopifyDigitalWallet {
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY'
}

/**
 * An amount discounting the line that has been allocated by a discount.
 *
 */
export type ShopifyDiscountAllocation = {
  __typename?: 'DiscountAllocation';
  /** Amount of discount allocated. */
  allocatedAmount: ShopifyMoneyV2;
  /** The discount this allocated amount originated from. */
  discountApplication: ShopifyDiscountApplication;
};

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 *
 */
export type ShopifyDiscountApplication = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: ShopifyDiscountApplicationAllocationMethod;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: ShopifyDiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: ShopifyDiscountApplicationTargetType;
  /** The value of the discount application. */
  value: ShopifyPricingValue;
};

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum ShopifyDiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = 'ACROSS',
  /** The value is applied onto every entitled line. */
  Each = 'EACH',
  /**
   * The value is specifically applied onto a particular line.
   * @deprecated Use ACROSS instead.
   */
  One = 'ONE'
}

/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 *
 */
export type ShopifyDiscountApplicationConnection = {
  __typename?: 'DiscountApplicationConnection';
  /** A list of edges. */
  edges: Array<ShopifyDiscountApplicationEdge>;
  /** A list of the nodes contained in DiscountApplicationEdge. */
  nodes: Array<ShopifyDiscountApplication>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 *
 */
export type ShopifyDiscountApplicationEdge = {
  __typename?: 'DiscountApplicationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of DiscountApplicationEdge. */
  node: ShopifyDiscountApplication;
};

/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 *
 */
export enum ShopifyDiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines that it's entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT'
}

/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
export enum ShopifyDiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE'
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 *
 */
export type ShopifyDiscountCodeApplication = ShopifyDiscountApplication & {
  __typename?: 'DiscountCodeApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: ShopifyDiscountApplicationAllocationMethod;
  /** Specifies whether the discount code was applied successfully. */
  applicable: Scalars['Boolean'];
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String'];
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: ShopifyDiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: ShopifyDiscountApplicationTargetType;
  /** The value of the discount application. */
  value: ShopifyPricingValue;
};

/** Represents an error in the input of a mutation. */
export type ShopifyDisplayableError = {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** Represents a web address. */
export type ShopifyDomain = {
  __typename?: 'Domain';
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String'];
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean'];
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL'];
};

/** Represents a video hosted outside of Shopify. */
export type ShopifyExternalVideo = ShopifyMedia & ShopifyNode & {
  __typename?: 'ExternalVideo';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The embed URL of the video for the respective host. */
  embedUrl: Scalars['URL'];
  /**
   * The URL.
   * @deprecated Use `originUrl` instead
   */
  embeddedUrl: Scalars['URL'];
  /** The host of the external video. */
  host: ShopifyMediaHost;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: ShopifyMediaContentType;
  /** The origin URL of the video on the respective host. */
  originUrl: Scalars['URL'];
  /** The preview image for the media. */
  previewImage?: Maybe<ShopifyImage>;
};

/** A filter that is supported on the parent field. */
export type ShopifyFilter = {
  __typename?: 'Filter';
  /** A unique identifier. */
  id: Scalars['String'];
  /** A human-friendly string for this filter. */
  label: Scalars['String'];
  /** An enumeration that denotes the type of data this filter represents. */
  type: ShopifyFilterType;
  /** The list of values for this filter. */
  values: Array<ShopifyFilterValue>;
};

/**
 * The type of data that the filter group represents.
 *
 * For more information, refer to [Filter products in a collection with the Storefront API]
 * (https://shopify.dev/api/examples/filter-products).
 *
 */
export enum ShopifyFilterType {
  /** A boolean value. */
  Boolean = 'BOOLEAN',
  /** A list of selectable values. */
  List = 'LIST',
  /** A range of prices. */
  PriceRange = 'PRICE_RANGE'
}

/** A selectable value within a filter. */
export type ShopifyFilterValue = {
  __typename?: 'FilterValue';
  /** The number of results that match this filter value. */
  count: Scalars['Int'];
  /** A unique identifier. */
  id: Scalars['String'];
  /**
   * An input object that can be used to filter by this value on the parent field.
   *
   * The value is provided as a helper for building dynamic filtering UI. For example, if you have a list of selected `FilterValue` objects, you can combine their respective `input` values to use in a subsequent query.
   *
   */
  input: Scalars['JSON'];
  /** A human-friendly string for this filter value. */
  label: Scalars['String'];
};

/** Represents a single fulfillment in an order. */
export type ShopifyFulfillment = {
  __typename?: 'Fulfillment';
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: ShopifyFulfillmentLineItemConnection;
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>;
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   *
   */
  trackingInfo: Array<ShopifyFulfillmentTrackingInfo>;
};


/** Represents a single fulfillment in an order. */
export type ShopifyFulfillmentFulfillmentLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** Represents a single fulfillment in an order. */
export type ShopifyFulfillmentTrackingInfoArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export type ShopifyFulfillmentLineItem = {
  __typename?: 'FulfillmentLineItem';
  /** The associated order's line item. */
  lineItem: ShopifyOrderLineItem;
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int'];
};

/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 *
 */
export type ShopifyFulfillmentLineItemConnection = {
  __typename?: 'FulfillmentLineItemConnection';
  /** A list of edges. */
  edges: Array<ShopifyFulfillmentLineItemEdge>;
  /** A list of the nodes contained in FulfillmentLineItemEdge. */
  nodes: Array<ShopifyFulfillmentLineItem>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 *
 */
export type ShopifyFulfillmentLineItemEdge = {
  __typename?: 'FulfillmentLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of FulfillmentLineItemEdge. */
  node: ShopifyFulfillmentLineItem;
};

/** Tracking information associated with the fulfillment. */
export type ShopifyFulfillmentTrackingInfo = {
  __typename?: 'FulfillmentTrackingInfo';
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>;
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']>;
};

/** The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON. */
export type ShopifyGenericFile = ShopifyNode & {
  __typename?: 'GenericFile';
  /** A word or phrase to indicate the contents of a file. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The MIME type of the file. */
  mimeType?: Maybe<Scalars['String']>;
  /** The size of the original file in bytes. */
  originalFileSize?: Maybe<Scalars['Int']>;
  /** The preview image for the file. */
  previewImage?: Maybe<ShopifyImage>;
  /** The URL of the file. */
  url?: Maybe<Scalars['URL']>;
};

/** Used to specify a geographical location. */
export type ShopifyGeoCoordinateInput = {
  /** The coordinate's latitude value. */
  latitude: Scalars['Float'];
  /** The coordinate's longitude value. */
  longitude: Scalars['Float'];
};

/** Represents information about the metafields associated to the specified resource. */
export type ShopifyHasMetafields = {
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyMetafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyMetafieldConnection;
};


/** Represents information about the metafields associated to the specified resource. */
export type ShopifyHasMetafieldsMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Represents information about the metafields associated to the specified resource. */
export type ShopifyHasMetafieldsMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Represents an image resource. */
export type ShopifyImage = {
  __typename?: 'Image';
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>;
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>;
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>;
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   *
   * @deprecated Use `url` instead
   */
  originalSrc: Scalars['URL'];
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead
   */
  src: Scalars['URL'];
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   *
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['URL'];
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
   *
   */
  url: Scalars['URL'];
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>;
};


/** Represents an image resource. */
export type ShopifyImageTransformedSrcArgs = {
  crop?: InputMaybe<ShopifyCropRegion>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  preferredContentType?: InputMaybe<ShopifyImageContentType>;
  scale?: InputMaybe<Scalars['Int']>;
};


/** Represents an image resource. */
export type ShopifyImageUrlArgs = {
  transform?: InputMaybe<ShopifyImageTransformInput>;
};

/**
 * An auto-generated type for paginating through multiple Images.
 *
 */
export type ShopifyImageConnection = {
  __typename?: 'ImageConnection';
  /** A list of edges. */
  edges: Array<ShopifyImageEdge>;
  /** A list of the nodes contained in ImageEdge. */
  nodes: Array<ShopifyImage>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/** List of supported image content types. */
export enum ShopifyImageContentType {
  /** A JPG image. */
  Jpg = 'JPG',
  /** A PNG image. */
  Png = 'PNG',
  /** A WEBP image. */
  Webp = 'WEBP'
}

/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 *
 */
export type ShopifyImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ImageEdge. */
  node: ShopifyImage;
};

/**
 * The available options for transforming an image.
 *
 * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
 *
 */
export type ShopifyImageTransformInput = {
  /**
   * Region of the image to remain after cropping.
   * Must be used in conjunction with maxWidth and/or maxHeight fields where the maxWidth / maxHeight are not equal.
   * The crop parameter should coincide with the smaller value (i.e. smaller maxWidth indicates a LEFT / RIGHT crop, while
   * smaller maxHeight indicates a TOP / BOTTOM crop). For example, { maxWidth: 5, maxHeight: 10, crop: LEFT } will result
   * in an image with width 5 and height 10, where the right side of the image is removed.
   *
   */
  crop?: InputMaybe<ShopifyCropRegion>;
  /**
   * Image height in pixels between 1 and 5760.
   *
   */
  maxHeight?: InputMaybe<Scalars['Int']>;
  /**
   * Image width in pixels between 1 and 5760.
   *
   */
  maxWidth?: InputMaybe<Scalars['Int']>;
  /**
   * Convert the source image into the preferred content type.
   * Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.
   *
   */
  preferredContentType?: InputMaybe<ShopifyImageContentType>;
  /**
   * Image size multiplier for high-resolution retina displays. Must be within 1..3.
   *
   */
  scale?: InputMaybe<Scalars['Int']>;
};

/** A language. */
export type ShopifyLanguage = {
  __typename?: 'Language';
  /** The name of the language in the language itself. If the language uses capitalization, it is capitalized for a mid-sentence position. */
  endonymName: Scalars['String'];
  /** The ISO code. */
  isoCode: ShopifyLanguageCode;
  /** The name of the language in the current language. */
  name: Scalars['String'];
};

/** ISO 639-1 language codes supported by Shopify. */
export enum ShopifyLanguageCode {
  /** Afrikaans. */
  Af = 'AF',
  /** Akan. */
  Ak = 'AK',
  /** Amharic. */
  Am = 'AM',
  /** Arabic. */
  Ar = 'AR',
  /** Assamese. */
  As = 'AS',
  /** Azerbaijani. */
  Az = 'AZ',
  /** Belarusian. */
  Be = 'BE',
  /** Bulgarian. */
  Bg = 'BG',
  /** Bambara. */
  Bm = 'BM',
  /** Bangla. */
  Bn = 'BN',
  /** Tibetan. */
  Bo = 'BO',
  /** Breton. */
  Br = 'BR',
  /** Bosnian. */
  Bs = 'BS',
  /** Catalan. */
  Ca = 'CA',
  /** Chechen. */
  Ce = 'CE',
  /** Czech. */
  Cs = 'CS',
  /** Church Slavic. */
  Cu = 'CU',
  /** Welsh. */
  Cy = 'CY',
  /** Danish. */
  Da = 'DA',
  /** German. */
  De = 'DE',
  /** Dzongkha. */
  Dz = 'DZ',
  /** Ewe. */
  Ee = 'EE',
  /** Greek. */
  El = 'EL',
  /** English. */
  En = 'EN',
  /** Esperanto. */
  Eo = 'EO',
  /** Spanish. */
  Es = 'ES',
  /** Estonian. */
  Et = 'ET',
  /** Basque. */
  Eu = 'EU',
  /** Persian. */
  Fa = 'FA',
  /** Fulah. */
  Ff = 'FF',
  /** Finnish. */
  Fi = 'FI',
  /** Faroese. */
  Fo = 'FO',
  /** French. */
  Fr = 'FR',
  /** Western Frisian. */
  Fy = 'FY',
  /** Irish. */
  Ga = 'GA',
  /** Scottish Gaelic. */
  Gd = 'GD',
  /** Galician. */
  Gl = 'GL',
  /** Gujarati. */
  Gu = 'GU',
  /** Manx. */
  Gv = 'GV',
  /** Hausa. */
  Ha = 'HA',
  /** Hebrew. */
  He = 'HE',
  /** Hindi. */
  Hi = 'HI',
  /** Croatian. */
  Hr = 'HR',
  /** Hungarian. */
  Hu = 'HU',
  /** Armenian. */
  Hy = 'HY',
  /** Interlingua. */
  Ia = 'IA',
  /** Indonesian. */
  Id = 'ID',
  /** Igbo. */
  Ig = 'IG',
  /** Sichuan Yi. */
  Ii = 'II',
  /** Icelandic. */
  Is = 'IS',
  /** Italian. */
  It = 'IT',
  /** Japanese. */
  Ja = 'JA',
  /** Javanese. */
  Jv = 'JV',
  /** Georgian. */
  Ka = 'KA',
  /** Kikuyu. */
  Ki = 'KI',
  /** Kazakh. */
  Kk = 'KK',
  /** Kalaallisut. */
  Kl = 'KL',
  /** Khmer. */
  Km = 'KM',
  /** Kannada. */
  Kn = 'KN',
  /** Korean. */
  Ko = 'KO',
  /** Kashmiri. */
  Ks = 'KS',
  /** Kurdish. */
  Ku = 'KU',
  /** Cornish. */
  Kw = 'KW',
  /** Kyrgyz. */
  Ky = 'KY',
  /** Luxembourgish. */
  Lb = 'LB',
  /** Ganda. */
  Lg = 'LG',
  /** Lingala. */
  Ln = 'LN',
  /** Lao. */
  Lo = 'LO',
  /** Lithuanian. */
  Lt = 'LT',
  /** Luba-Katanga. */
  Lu = 'LU',
  /** Latvian. */
  Lv = 'LV',
  /** Malagasy. */
  Mg = 'MG',
  /** Maori. */
  Mi = 'MI',
  /** Macedonian. */
  Mk = 'MK',
  /** Malayalam. */
  Ml = 'ML',
  /** Mongolian. */
  Mn = 'MN',
  /** Marathi. */
  Mr = 'MR',
  /** Malay. */
  Ms = 'MS',
  /** Maltese. */
  Mt = 'MT',
  /** Burmese. */
  My = 'MY',
  /** Norwegian (Bokmål). */
  Nb = 'NB',
  /** North Ndebele. */
  Nd = 'ND',
  /** Nepali. */
  Ne = 'NE',
  /** Dutch. */
  Nl = 'NL',
  /** Norwegian Nynorsk. */
  Nn = 'NN',
  /** Norwegian. */
  No = 'NO',
  /** Oromo. */
  Om = 'OM',
  /** Odia. */
  Or = 'OR',
  /** Ossetic. */
  Os = 'OS',
  /** Punjabi. */
  Pa = 'PA',
  /** Polish. */
  Pl = 'PL',
  /** Pashto. */
  Ps = 'PS',
  /** Portuguese. */
  Pt = 'PT',
  /** Portuguese (Brazil). */
  PtBr = 'PT_BR',
  /** Portuguese (Portugal). */
  PtPt = 'PT_PT',
  /** Quechua. */
  Qu = 'QU',
  /** Romansh. */
  Rm = 'RM',
  /** Rundi. */
  Rn = 'RN',
  /** Romanian. */
  Ro = 'RO',
  /** Russian. */
  Ru = 'RU',
  /** Kinyarwanda. */
  Rw = 'RW',
  /** Sindhi. */
  Sd = 'SD',
  /** Northern Sami. */
  Se = 'SE',
  /** Sango. */
  Sg = 'SG',
  /** Sinhala. */
  Si = 'SI',
  /** Slovak. */
  Sk = 'SK',
  /** Slovenian. */
  Sl = 'SL',
  /** Shona. */
  Sn = 'SN',
  /** Somali. */
  So = 'SO',
  /** Albanian. */
  Sq = 'SQ',
  /** Serbian. */
  Sr = 'SR',
  /** Sundanese. */
  Su = 'SU',
  /** Swedish. */
  Sv = 'SV',
  /** Swahili. */
  Sw = 'SW',
  /** Tamil. */
  Ta = 'TA',
  /** Telugu. */
  Te = 'TE',
  /** Tajik. */
  Tg = 'TG',
  /** Thai. */
  Th = 'TH',
  /** Tigrinya. */
  Ti = 'TI',
  /** Turkmen. */
  Tk = 'TK',
  /** Tongan. */
  To = 'TO',
  /** Turkish. */
  Tr = 'TR',
  /** Tatar. */
  Tt = 'TT',
  /** Uyghur. */
  Ug = 'UG',
  /** Ukrainian. */
  Uk = 'UK',
  /** Urdu. */
  Ur = 'UR',
  /** Uzbek. */
  Uz = 'UZ',
  /** Vietnamese. */
  Vi = 'VI',
  /** Volapük. */
  Vo = 'VO',
  /** Wolof. */
  Wo = 'WO',
  /** Xhosa. */
  Xh = 'XH',
  /** Yiddish. */
  Yi = 'YI',
  /** Yoruba. */
  Yo = 'YO',
  /** Chinese. */
  Zh = 'ZH',
  /** Chinese (Simplified). */
  ZhCn = 'ZH_CN',
  /** Chinese (Traditional). */
  ZhTw = 'ZH_TW',
  /** Zulu. */
  Zu = 'ZU'
}

/** Information about the localized experiences configured for the shop. */
export type ShopifyLocalization = {
  __typename?: 'Localization';
  /** The list of countries with enabled localized experiences. */
  availableCountries: Array<ShopifyCountry>;
  /** The list of languages available for the active country. */
  availableLanguages: Array<ShopifyLanguage>;
  /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
  country: ShopifyCountry;
  /** The language of the active localized experience. Use the `@inContext` directive to change this value. */
  language: ShopifyLanguage;
};

/** Represents a location where product inventory is held. */
export type ShopifyLocation = ShopifyNode & {
  __typename?: 'Location';
  /** The address of the location. */
  address: ShopifyLocationAddress;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the location. */
  name: Scalars['String'];
};

/**
 * Represents the address of a location.
 *
 */
export type ShopifyLocationAddress = {
  __typename?: 'LocationAddress';
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>;
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>;
  /** The city of the location. */
  city?: Maybe<Scalars['String']>;
  /** The country of the location. */
  country?: Maybe<Scalars['String']>;
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']>;
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']>;
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>;
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>;
  /** The province of the location. */
  province?: Maybe<Scalars['String']>;
  /**
   * The code for the province, state, or district of the address of the location.
   *
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>;
};

/**
 * An auto-generated type for paginating through multiple Locations.
 *
 */
export type ShopifyLocationConnection = {
  __typename?: 'LocationConnection';
  /** A list of edges. */
  edges: Array<ShopifyLocationEdge>;
  /** A list of the nodes contained in LocationEdge. */
  nodes: Array<ShopifyLocation>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one Location and a cursor during pagination.
 *
 */
export type ShopifyLocationEdge = {
  __typename?: 'LocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of LocationEdge. */
  node: ShopifyLocation;
};

/** The set of valid sort keys for the Location query. */
export enum ShopifyLocationSortKeys {
  /** Sort by the `city` value. */
  City = 'CITY',
  /** Sort by the `distance` value. */
  Distance = 'DISTANCE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `name` value. */
  Name = 'NAME'
}

/** Represents a mailing address for customers and shipping. */
export type ShopifyMailingAddress = ShopifyNode & {
  __typename?: 'MailingAddress';
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars['String']>;
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: Maybe<Scalars['String']>;
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: Maybe<Scalars['String']>;
  /**
   * The name of the country.
   *
   */
  country?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe<ShopifyCountryCode>;
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>;
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>;
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>;
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>;
  /**
   * The full name of the customer, based on firstName and lastName.
   *
   */
  name?: Maybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>;
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>;
};


/** Represents a mailing address for customers and shipping. */
export type ShopifyMailingAddressFormattedArgs = {
  withCompany?: InputMaybe<Scalars['Boolean']>;
  withName?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 *
 */
export type ShopifyMailingAddressConnection = {
  __typename?: 'MailingAddressConnection';
  /** A list of edges. */
  edges: Array<ShopifyMailingAddressEdge>;
  /** A list of the nodes contained in MailingAddressEdge. */
  nodes: Array<ShopifyMailingAddress>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 *
 */
export type ShopifyMailingAddressEdge = {
  __typename?: 'MailingAddressEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MailingAddressEdge. */
  node: ShopifyMailingAddress;
};

/** Specifies the fields accepted to create or update a mailing address. */
export type ShopifyMailingAddressInput = {
  /**
   * The first line of the address. Typically the street address or PO Box number.
   *
   */
  address1?: InputMaybe<Scalars['String']>;
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: InputMaybe<Scalars['String']>;
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: InputMaybe<Scalars['String']>;
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: InputMaybe<Scalars['String']>;
  /** The name of the country. */
  country?: InputMaybe<Scalars['String']>;
  /** The first name of the customer. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The last name of the customer. */
  lastName?: InputMaybe<Scalars['String']>;
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>;
  /** The region of the address, such as the province, state, or district. */
  province?: InputMaybe<Scalars['String']>;
  /** The zip or postal code of the address. */
  zip?: InputMaybe<Scalars['String']>;
};

/**
 * Manual discount applications capture the intentions of a discount that was manually created.
 *
 */
export type ShopifyManualDiscountApplication = ShopifyDiscountApplication & {
  __typename?: 'ManualDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: ShopifyDiscountApplicationAllocationMethod;
  /** The description of the application. */
  description?: Maybe<Scalars['String']>;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: ShopifyDiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: ShopifyDiscountApplicationTargetType;
  /** The title of the application. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: ShopifyPricingValue;
};

/** Represents a media interface. */
export type ShopifyMedia = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** The media content type. */
  mediaContentType: ShopifyMediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<ShopifyImage>;
};

/**
 * An auto-generated type for paginating through multiple Media.
 *
 */
export type ShopifyMediaConnection = {
  __typename?: 'MediaConnection';
  /** A list of edges. */
  edges: Array<ShopifyMediaEdge>;
  /** A list of the nodes contained in MediaEdge. */
  nodes: Array<ShopifyMedia>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/** The possible content types for a media object. */
export enum ShopifyMediaContentType {
  /** An externally hosted video. */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** A Shopify hosted image. */
  Image = 'IMAGE',
  /** A 3d model. */
  Model_3D = 'MODEL_3D',
  /** A Shopify hosted video. */
  Video = 'VIDEO'
}

/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 *
 */
export type ShopifyMediaEdge = {
  __typename?: 'MediaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MediaEdge. */
  node: ShopifyMedia;
};

/** Host for a Media Resource. */
export enum ShopifyMediaHost {
  /** Host for Vimeo embedded videos. */
  Vimeo = 'VIMEO',
  /** Host for YouTube embedded videos. */
  Youtube = 'YOUTUBE'
}

/** Represents a Shopify hosted image. */
export type ShopifyMediaImage = ShopifyMedia & ShopifyNode & {
  __typename?: 'MediaImage';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The image for the media. */
  image?: Maybe<ShopifyImage>;
  /** The media content type. */
  mediaContentType: ShopifyMediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<ShopifyImage>;
};

/**
 * A menu used for navigation within a storefront.
 *
 */
export type ShopifyMenu = ShopifyNode & {
  __typename?: 'Menu';
  /** The menu's handle. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The menu's child items. */
  items: Array<ShopifyMenuItem>;
  /** The count of items on the menu. */
  itemsCount: Scalars['Int'];
  /** The menu's title. */
  title: Scalars['String'];
};

/**
 * A menu item within a parent menu.
 *
 */
export type ShopifyMenuItem = ShopifyNode & {
  __typename?: 'MenuItem';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The menu item's child items. */
  items: Array<ShopifyMenuItem>;
  /** The ID of the linked resource. */
  resourceId?: Maybe<Scalars['ID']>;
  /** The menu item's tags to filter a collection. */
  tags: Array<Scalars['String']>;
  /** The menu item's title. */
  title: Scalars['String'];
  /** The menu item's type. */
  type: ShopifyMenuItemType;
  /** The menu item's URL. */
  url?: Maybe<Scalars['URL']>;
};

/** A menu item type. */
export enum ShopifyMenuItemType {
  /** An article link. */
  Article = 'ARTICLE',
  /** A blog link. */
  Blog = 'BLOG',
  /** A catalog link. */
  Catalog = 'CATALOG',
  /** A collection link. */
  Collection = 'COLLECTION',
  /** A collection link. */
  Collections = 'COLLECTIONS',
  /** A frontpage link. */
  Frontpage = 'FRONTPAGE',
  /** An http link. */
  Http = 'HTTP',
  /** A page link. */
  Page = 'PAGE',
  /** A product link. */
  Product = 'PRODUCT',
  /** A search link. */
  Search = 'SEARCH',
  /** A shop policy link. */
  ShopPolicy = 'SHOP_POLICY'
}

/** The merchandise to be purchased at checkout. */
export type ShopifyMerchandise = ShopifyProductVariant;

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
export type ShopifyMetafield = ShopifyNode & {
  __typename?: 'Metafield';
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime'];
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The key name for a metafield. */
  key: Scalars['String'];
  /** The namespace for a metafield. */
  namespace: Scalars['String'];
  /** The parent object that the metafield belongs to. */
  parentResource: ShopifyMetafieldParentResource;
  /** Returns a reference object if the metafield definition's type is a resource reference. */
  reference?: Maybe<ShopifyMetafieldReference>;
  /**
   * The type name of the metafield.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String'];
  /** The date and time when the storefront metafield was updated. */
  updatedAt: Scalars['DateTime'];
  /** The value of a metafield. */
  value: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple Metafields.
 *
 */
export type ShopifyMetafieldConnection = {
  __typename?: 'MetafieldConnection';
  /** A list of edges. */
  edges: Array<ShopifyMetafieldEdge>;
  /** A list of the nodes contained in MetafieldEdge. */
  nodes: Array<ShopifyMetafield>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one Metafield and a cursor during pagination.
 *
 */
export type ShopifyMetafieldEdge = {
  __typename?: 'MetafieldEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of MetafieldEdge. */
  node: ShopifyMetafield;
};

/**
 * A filter used to view a subset of products in a collection matching a specific metafield value.
 *
 * Only the following metafield types are currently supported:
 * - `number_integer`
 * - `number_decimal`
 * - `single_line_text_field`
 * - `boolean` as of 2022-04.
 *
 */
export type ShopifyMetafieldFilter = {
  /** The key of the metafield to filter on. */
  key: Scalars['String'];
  /** The namespace of the metafield to filter on. */
  namespace: Scalars['String'];
  /** The value of the metafield. */
  value: Scalars['String'];
};

/** A resource that the metafield belongs to. */
export type ShopifyMetafieldParentResource = ShopifyArticle | ShopifyBlog | ShopifyCollection | ShopifyCustomer | ShopifyOrder | ShopifyPage | ShopifyProduct | ShopifyProductVariant | ShopifyShop;

/**
 * Returns the resource which is being referred to by a metafield.
 *
 */
export type ShopifyMetafieldReference = ShopifyGenericFile | ShopifyMediaImage | ShopifyPage | ShopifyProduct | ShopifyProductVariant | ShopifyVideo;

/** Represents a Shopify hosted 3D model. */
export type ShopifyModel3d = ShopifyMedia & ShopifyNode & {
  __typename?: 'Model3d';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: ShopifyMediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<ShopifyImage>;
  /** The sources for a 3d model. */
  sources: Array<ShopifyModel3dSource>;
};

/** Represents a source for a Shopify hosted 3d model. */
export type ShopifyModel3dSource = {
  __typename?: 'Model3dSource';
  /** The filesize of the 3d model. */
  filesize: Scalars['Int'];
  /** The format of the 3d model. */
  format: Scalars['String'];
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String'];
  /** The URL of the 3d model. */
  url: Scalars['String'];
};

/** Specifies the fields for a monetary value with currency. */
export type ShopifyMoneyInput = {
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: ShopifyCurrencyCode;
};

/**
 * A monetary value with currency.
 *
 */
export type ShopifyMoneyV2 = {
  __typename?: 'MoneyV2';
  /** Decimal money amount. */
  amount: Scalars['Decimal'];
  /** Currency of the money. */
  currencyCode: ShopifyCurrencyCode;
};

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutation = {
  __typename?: 'Mutation';
  /** Updates the attributes on a cart. */
  cartAttributesUpdate?: Maybe<ShopifyCartAttributesUpdatePayload>;
  /**
   * Updates customer information associated with a cart.
   * Buyer identity is used to determine
   * [international pricing](https://shopify.dev/api/examples/international-pricing#create-a-checkout)
   * and should match the customer's shipping address.
   *
   */
  cartBuyerIdentityUpdate?: Maybe<ShopifyCartBuyerIdentityUpdatePayload>;
  /** Creates a new cart. */
  cartCreate?: Maybe<ShopifyCartCreatePayload>;
  /** Updates the discount codes applied to the cart. */
  cartDiscountCodesUpdate?: Maybe<ShopifyCartDiscountCodesUpdatePayload>;
  /** Adds a merchandise line to the cart. */
  cartLinesAdd?: Maybe<ShopifyCartLinesAddPayload>;
  /** Removes one or more merchandise lines from the cart. */
  cartLinesRemove?: Maybe<ShopifyCartLinesRemovePayload>;
  /** Updates one or more merchandise lines on a cart. */
  cartLinesUpdate?: Maybe<ShopifyCartLinesUpdatePayload>;
  /** Updates the note on the cart. */
  cartNoteUpdate?: Maybe<ShopifyCartNoteUpdatePayload>;
  /**
   * Updates the attributes of a checkout if `allowPartialAddresses` is `true`.
   * @deprecated Use `checkoutAttributesUpdateV2` instead
   */
  checkoutAttributesUpdate?: Maybe<ShopifyCheckoutAttributesUpdatePayload>;
  /** Updates the attributes of a checkout if `allowPartialAddresses` is `true`. */
  checkoutAttributesUpdateV2?: Maybe<ShopifyCheckoutAttributesUpdateV2Payload>;
  /** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card. */
  checkoutCompleteFree?: Maybe<ShopifyCheckoutCompleteFreePayload>;
  /**
   * Completes a checkout using a credit card token from Shopify's Vault.
   * @deprecated Use `checkoutCompleteWithCreditCardV2` instead
   */
  checkoutCompleteWithCreditCard?: Maybe<ShopifyCheckoutCompleteWithCreditCardPayload>;
  /** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://shopify.dev/apps/channels/getting-started#request-payment-processing). */
  checkoutCompleteWithCreditCardV2?: Maybe<ShopifyCheckoutCompleteWithCreditCardV2Payload>;
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV2` instead
   */
  checkoutCompleteWithTokenizedPayment?: Maybe<ShopifyCheckoutCompleteWithTokenizedPaymentPayload>;
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV3` instead
   */
  checkoutCompleteWithTokenizedPaymentV2?: Maybe<ShopifyCheckoutCompleteWithTokenizedPaymentV2Payload>;
  /** Completes a checkout with a tokenized payment. */
  checkoutCompleteWithTokenizedPaymentV3?: Maybe<ShopifyCheckoutCompleteWithTokenizedPaymentV3Payload>;
  /** Creates a new checkout. */
  checkoutCreate?: Maybe<ShopifyCheckoutCreatePayload>;
  /**
   * Associates a customer to the checkout.
   * @deprecated Use `checkoutCustomerAssociateV2` instead
   */
  checkoutCustomerAssociate?: Maybe<ShopifyCheckoutCustomerAssociatePayload>;
  /** Associates a customer to the checkout. */
  checkoutCustomerAssociateV2?: Maybe<ShopifyCheckoutCustomerAssociateV2Payload>;
  /**
   * Disassociates the current checkout customer from the checkout.
   * @deprecated Use `checkoutCustomerDisassociateV2` instead
   */
  checkoutCustomerDisassociate?: Maybe<ShopifyCheckoutCustomerDisassociatePayload>;
  /** Disassociates the current checkout customer from the checkout. */
  checkoutCustomerDisassociateV2?: Maybe<ShopifyCheckoutCustomerDisassociateV2Payload>;
  /**
   * Applies a discount to an existing checkout using a discount code.
   * @deprecated Use `checkoutDiscountCodeApplyV2` instead
   */
  checkoutDiscountCodeApply?: Maybe<ShopifyCheckoutDiscountCodeApplyPayload>;
  /** Applies a discount to an existing checkout using a discount code. */
  checkoutDiscountCodeApplyV2?: Maybe<ShopifyCheckoutDiscountCodeApplyV2Payload>;
  /** Removes the applied discounts from an existing checkout. */
  checkoutDiscountCodeRemove?: Maybe<ShopifyCheckoutDiscountCodeRemovePayload>;
  /**
   * Updates the email on an existing checkout.
   * @deprecated Use `checkoutEmailUpdateV2` instead
   */
  checkoutEmailUpdate?: Maybe<ShopifyCheckoutEmailUpdatePayload>;
  /** Updates the email on an existing checkout. */
  checkoutEmailUpdateV2?: Maybe<ShopifyCheckoutEmailUpdateV2Payload>;
  /**
   * Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.
   * @deprecated Use `checkoutGiftCardsAppend` instead
   */
  checkoutGiftCardApply?: Maybe<ShopifyCheckoutGiftCardApplyPayload>;
  /**
   * Removes an applied gift card from the checkout.
   * @deprecated Use `checkoutGiftCardRemoveV2` instead
   */
  checkoutGiftCardRemove?: Maybe<ShopifyCheckoutGiftCardRemovePayload>;
  /** Removes an applied gift card from the checkout. */
  checkoutGiftCardRemoveV2?: Maybe<ShopifyCheckoutGiftCardRemoveV2Payload>;
  /** Appends gift cards to an existing checkout. */
  checkoutGiftCardsAppend?: Maybe<ShopifyCheckoutGiftCardsAppendPayload>;
  /** Adds a list of line items to a checkout. */
  checkoutLineItemsAdd?: Maybe<ShopifyCheckoutLineItemsAddPayload>;
  /** Removes line items from an existing checkout. */
  checkoutLineItemsRemove?: Maybe<ShopifyCheckoutLineItemsRemovePayload>;
  /** Sets a list of line items to a checkout. */
  checkoutLineItemsReplace?: Maybe<ShopifyCheckoutLineItemsReplacePayload>;
  /** Updates line items on a checkout. */
  checkoutLineItemsUpdate?: Maybe<ShopifyCheckoutLineItemsUpdatePayload>;
  /**
   * Updates the shipping address of an existing checkout.
   * @deprecated Use `checkoutShippingAddressUpdateV2` instead
   */
  checkoutShippingAddressUpdate?: Maybe<ShopifyCheckoutShippingAddressUpdatePayload>;
  /** Updates the shipping address of an existing checkout. */
  checkoutShippingAddressUpdateV2?: Maybe<ShopifyCheckoutShippingAddressUpdateV2Payload>;
  /** Updates the shipping lines on an existing checkout. */
  checkoutShippingLineUpdate?: Maybe<ShopifyCheckoutShippingLineUpdatePayload>;
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   *
   */
  customerAccessTokenCreate?: Maybe<ShopifyCustomerAccessTokenCreatePayload>;
  /**
   * Creates a customer access token using a multipass token instead of email and password.
   * A customer record is created if customer does not exist. If a customer record already
   * exists but the record is disabled, then it's enabled.
   *
   */
  customerAccessTokenCreateWithMultipass?: Maybe<ShopifyCustomerAccessTokenCreateWithMultipassPayload>;
  /** Permanently destroys a customer access token. */
  customerAccessTokenDelete?: Maybe<ShopifyCustomerAccessTokenDeletePayload>;
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   *
   */
  customerAccessTokenRenew?: Maybe<ShopifyCustomerAccessTokenRenewPayload>;
  /** Activates a customer. */
  customerActivate?: Maybe<ShopifyCustomerActivatePayload>;
  /** Activates a customer with the activation url received from `customerCreate`. */
  customerActivateByUrl?: Maybe<ShopifyCustomerActivateByUrlPayload>;
  /** Creates a new address for a customer. */
  customerAddressCreate?: Maybe<ShopifyCustomerAddressCreatePayload>;
  /** Permanently deletes the address of an existing customer. */
  customerAddressDelete?: Maybe<ShopifyCustomerAddressDeletePayload>;
  /** Updates the address of an existing customer. */
  customerAddressUpdate?: Maybe<ShopifyCustomerAddressUpdatePayload>;
  /** Creates a new customer. */
  customerCreate?: Maybe<ShopifyCustomerCreatePayload>;
  /** Updates the default address of an existing customer. */
  customerDefaultAddressUpdate?: Maybe<ShopifyCustomerDefaultAddressUpdatePayload>;
  /** Sends a reset password email to the customer, as the first step in the reset password process. */
  customerRecover?: Maybe<ShopifyCustomerRecoverPayload>;
  /** Resets a customer’s password with a token received from `CustomerRecover`. */
  customerReset?: Maybe<ShopifyCustomerResetPayload>;
  /** Resets a customer’s password with the reset password url received from `CustomerRecover`. */
  customerResetByUrl?: Maybe<ShopifyCustomerResetByUrlPayload>;
  /** Updates an existing customer. */
  customerUpdate?: Maybe<ShopifyCustomerUpdatePayload>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCartAttributesUpdateArgs = {
  attributes: Array<ShopifyAttributeInput>;
  cartId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCartBuyerIdentityUpdateArgs = {
  buyerIdentity: ShopifyCartBuyerIdentityInput;
  cartId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCartCreateArgs = {
  input?: InputMaybe<ShopifyCartInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCartDiscountCodesUpdateArgs = {
  cartId: Scalars['ID'];
  discountCodes?: InputMaybe<Array<Scalars['String']>>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCartLinesAddArgs = {
  cartId: Scalars['ID'];
  lines: Array<ShopifyCartLineInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCartLinesRemoveArgs = {
  cartId: Scalars['ID'];
  lineIds: Array<Scalars['ID']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCartLinesUpdateArgs = {
  cartId: Scalars['ID'];
  lines: Array<ShopifyCartLineUpdateInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCartNoteUpdateArgs = {
  cartId: Scalars['ID'];
  note?: InputMaybe<Scalars['String']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutAttributesUpdateArgs = {
  checkoutId: Scalars['ID'];
  input: ShopifyCheckoutAttributesUpdateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutAttributesUpdateV2Args = {
  checkoutId: Scalars['ID'];
  input: ShopifyCheckoutAttributesUpdateV2Input;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCompleteFreeArgs = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCompleteWithCreditCardArgs = {
  checkoutId: Scalars['ID'];
  payment: ShopifyCreditCardPaymentInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCompleteWithCreditCardV2Args = {
  checkoutId: Scalars['ID'];
  payment: ShopifyCreditCardPaymentInputV2;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCompleteWithTokenizedPaymentArgs = {
  checkoutId: Scalars['ID'];
  payment: ShopifyTokenizedPaymentInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCompleteWithTokenizedPaymentV2Args = {
  checkoutId: Scalars['ID'];
  payment: ShopifyTokenizedPaymentInputV2;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCompleteWithTokenizedPaymentV3Args = {
  checkoutId: Scalars['ID'];
  payment: ShopifyTokenizedPaymentInputV3;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCreateArgs = {
  input: ShopifyCheckoutCreateInput;
  queueToken?: InputMaybe<Scalars['String']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCustomerAssociateArgs = {
  checkoutId: Scalars['ID'];
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCustomerAssociateV2Args = {
  checkoutId: Scalars['ID'];
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCustomerDisassociateArgs = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutCustomerDisassociateV2Args = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutDiscountCodeApplyArgs = {
  checkoutId: Scalars['ID'];
  discountCode: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutDiscountCodeApplyV2Args = {
  checkoutId: Scalars['ID'];
  discountCode: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutDiscountCodeRemoveArgs = {
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutEmailUpdateArgs = {
  checkoutId: Scalars['ID'];
  email: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutEmailUpdateV2Args = {
  checkoutId: Scalars['ID'];
  email: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutGiftCardApplyArgs = {
  checkoutId: Scalars['ID'];
  giftCardCode: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutGiftCardRemoveArgs = {
  appliedGiftCardId: Scalars['ID'];
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutGiftCardRemoveV2Args = {
  appliedGiftCardId: Scalars['ID'];
  checkoutId: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutGiftCardsAppendArgs = {
  checkoutId: Scalars['ID'];
  giftCardCodes: Array<Scalars['String']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutLineItemsAddArgs = {
  checkoutId: Scalars['ID'];
  lineItems: Array<ShopifyCheckoutLineItemInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutLineItemsRemoveArgs = {
  checkoutId: Scalars['ID'];
  lineItemIds: Array<Scalars['ID']>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutLineItemsReplaceArgs = {
  checkoutId: Scalars['ID'];
  lineItems: Array<ShopifyCheckoutLineItemInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutLineItemsUpdateArgs = {
  checkoutId: Scalars['ID'];
  lineItems: Array<ShopifyCheckoutLineItemUpdateInput>;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutShippingAddressUpdateArgs = {
  checkoutId: Scalars['ID'];
  shippingAddress: ShopifyMailingAddressInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutShippingAddressUpdateV2Args = {
  checkoutId: Scalars['ID'];
  shippingAddress: ShopifyMailingAddressInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCheckoutShippingLineUpdateArgs = {
  checkoutId: Scalars['ID'];
  shippingRateHandle: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerAccessTokenCreateArgs = {
  input: ShopifyCustomerAccessTokenCreateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerAccessTokenCreateWithMultipassArgs = {
  multipassToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerAccessTokenDeleteArgs = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerAccessTokenRenewArgs = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerActivateArgs = {
  id: Scalars['ID'];
  input: ShopifyCustomerActivateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerActivateByUrlArgs = {
  activationUrl: Scalars['URL'];
  password: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerAddressCreateArgs = {
  address: ShopifyMailingAddressInput;
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerAddressDeleteArgs = {
  customerAccessToken: Scalars['String'];
  id: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerAddressUpdateArgs = {
  address: ShopifyMailingAddressInput;
  customerAccessToken: Scalars['String'];
  id: Scalars['ID'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerCreateArgs = {
  input: ShopifyCustomerCreateInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerDefaultAddressUpdateArgs = {
  addressId: Scalars['ID'];
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerRecoverArgs = {
  email: Scalars['String'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerResetArgs = {
  id: Scalars['ID'];
  input: ShopifyCustomerResetInput;
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerResetByUrlArgs = {
  password: Scalars['String'];
  resetUrl: Scalars['URL'];
};


/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type ShopifyMutationCustomerUpdateArgs = {
  customer: ShopifyCustomerUpdateInput;
  customerAccessToken: Scalars['String'];
};

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 *
 */
export type ShopifyNode = {
  /** A globally-unique identifier. */
  id: Scalars['ID'];
};

/** Represents a resource that can be published to the Online Store sales channel. */
export type ShopifyOnlineStorePublishable = {
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
};

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyOrder = ShopifyHasMetafields & ShopifyNode & {
  __typename?: 'Order';
  /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
  cancelReason?: Maybe<ShopifyOrderCancelReason>;
  /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
  canceledAt?: Maybe<Scalars['DateTime']>;
  /** The code of the currency used for the payment. */
  currencyCode: ShopifyCurrencyCode;
  /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
  currentSubtotalPrice: ShopifyMoneyV2;
  /** The total cost of duties for the order, including refunds. */
  currentTotalDuties?: Maybe<ShopifyMoneyV2>;
  /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
  currentTotalPrice: ShopifyMoneyV2;
  /** The total of all taxes applied to the order, excluding taxes for returned line items. */
  currentTotalTax: ShopifyMoneyV2;
  /** The locale code in which this specific order happened. */
  customerLocale?: Maybe<Scalars['String']>;
  /** The unique URL that the customer can use to access the order. */
  customerUrl?: Maybe<Scalars['URL']>;
  /** Discounts that have been applied on the order. */
  discountApplications: ShopifyDiscountApplicationConnection;
  /** Whether the order has had any edits applied or not. */
  edited: Scalars['Boolean'];
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /** The financial status of the order. */
  financialStatus?: Maybe<ShopifyOrderFinancialStatus>;
  /** The fulfillment status for the order. */
  fulfillmentStatus: ShopifyOrderFulfillmentStatus;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** List of the order’s line items. */
  lineItems: ShopifyOrderLineItemConnection;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyMetafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyMetafieldConnection;
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   *
   */
  name: Scalars['String'];
  /** A unique numeric identifier for the order for use by shop owner and customer. */
  orderNumber: Scalars['Int'];
  /** The total cost of duties charged at checkout. */
  originalTotalDuties?: Maybe<ShopifyMoneyV2>;
  /** The total price of the order before any applied edits. */
  originalTotalPrice: ShopifyMoneyV2;
  /** The customer's phone number for receiving SMS notifications. */
  phone?: Maybe<Scalars['String']>;
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   *
   */
  processedAt: Scalars['DateTime'];
  /** The address to where the order will be shipped. */
  shippingAddress?: Maybe<ShopifyMailingAddress>;
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<ShopifyDiscountAllocation>;
  /** The unique URL for the order's status page. */
  statusUrl: Scalars['URL'];
  /**
   * Price of the order before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice?: Maybe<Scalars['Money']>;
  /** Price of the order before duties, shipping and taxes. */
  subtotalPriceV2?: Maybe<ShopifyMoneyV2>;
  /** List of the order’s successful fulfillments. */
  successfulFulfillments?: Maybe<Array<ShopifyFulfillment>>;
  /**
   * The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: Scalars['Money'];
  /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
  totalPriceV2: ShopifyMoneyV2;
  /**
   * The total amount that has been refunded.
   * @deprecated Use `totalRefundedV2` instead
   */
  totalRefunded: Scalars['Money'];
  /** The total amount that has been refunded. */
  totalRefundedV2: ShopifyMoneyV2;
  /**
   * The total cost of shipping.
   * @deprecated Use `totalShippingPriceV2` instead
   */
  totalShippingPrice: Scalars['Money'];
  /** The total cost of shipping. */
  totalShippingPriceV2: ShopifyMoneyV2;
  /**
   * The total cost of taxes.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax?: Maybe<Scalars['Money']>;
  /** The total cost of taxes. */
  totalTaxV2?: Maybe<ShopifyMoneyV2>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyOrderDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyOrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyOrderMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyOrderMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type ShopifyOrderSuccessfulFulfillmentsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

/** Represents the reason for the order's cancellation. */
export enum ShopifyOrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = 'CUSTOMER',
  /** Payment was declined. */
  Declined = 'DECLINED',
  /** The order was fraudulent. */
  Fraud = 'FRAUD',
  /** There was insufficient inventory. */
  Inventory = 'INVENTORY',
  /** The order was canceled for an unlisted reason. */
  Other = 'OTHER'
}

/**
 * An auto-generated type for paginating through multiple Orders.
 *
 */
export type ShopifyOrderConnection = {
  __typename?: 'OrderConnection';
  /** A list of edges. */
  edges: Array<ShopifyOrderEdge>;
  /** A list of the nodes contained in OrderEdge. */
  nodes: Array<ShopifyOrder>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 *
 */
export type ShopifyOrderEdge = {
  __typename?: 'OrderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderEdge. */
  node: ShopifyOrder;
};

/** Represents the order's current financial status. */
export enum ShopifyOrderFinancialStatus {
  /** Displayed as **Authorized**. */
  Authorized = 'AUTHORIZED',
  /** Displayed as **Paid**. */
  Paid = 'PAID',
  /** Displayed as **Partially paid**. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Displayed as **Pending**. */
  Pending = 'PENDING',
  /** Displayed as **Refunded**. */
  Refunded = 'REFUNDED',
  /** Displayed as **Voided**. */
  Voided = 'VOIDED'
}

/** Represents the order's aggregated fulfillment status for display purposes. */
export enum ShopifyOrderFulfillmentStatus {
  /** Displayed as **Fulfilled**. All of the items in the order have been fulfilled. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  InProgress = 'IN_PROGRESS',
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OnHold = 'ON_HOLD',
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  Open = 'OPEN',
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN_PROGRESS" status. */
  PendingFulfillment = 'PENDING_FULFILLMENT',
  /** Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status. */
  Restocked = 'RESTOCKED',
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  Scheduled = 'SCHEDULED',
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  Unfulfilled = 'UNFULFILLED'
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
export type ShopifyOrderLineItem = {
  __typename?: 'OrderLineItem';
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars['Int'];
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<ShopifyAttribute>;
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<ShopifyDiscountAllocation>;
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: ShopifyMoneyV2;
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
  originalTotalPrice: ShopifyMoneyV2;
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int'];
  /** The title of the product combined with title of the variant. */
  title: Scalars['String'];
  /** The product variant object associated to the line item. */
  variant?: Maybe<ShopifyProductVariant>;
};

/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 *
 */
export type ShopifyOrderLineItemConnection = {
  __typename?: 'OrderLineItemConnection';
  /** A list of edges. */
  edges: Array<ShopifyOrderLineItemEdge>;
  /** A list of the nodes contained in OrderLineItemEdge. */
  nodes: Array<ShopifyOrderLineItem>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 *
 */
export type ShopifyOrderLineItemEdge = {
  __typename?: 'OrderLineItemEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of OrderLineItemEdge. */
  node: ShopifyOrderLineItem;
};

/** The set of valid sort keys for the Order query. */
export enum ShopifyOrderSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `processed_at` value. */
  ProcessedAt = 'PROCESSED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE'
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type ShopifyPage = ShopifyHasMetafields & ShopifyNode & ShopifyOnlineStorePublishable & {
  __typename?: 'Page';
  /** The description of the page, complete with HTML formatting. */
  body: Scalars['HTML'];
  /** Summary of the page body. */
  bodySummary: Scalars['String'];
  /** The timestamp of the page creation. */
  createdAt: Scalars['DateTime'];
  /** A human-friendly unique string for the page automatically generated from its title. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyMetafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyMetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** The page's SEO information. */
  seo?: Maybe<ShopifySeo>;
  /** The title of the page. */
  title: Scalars['String'];
  /** The timestamp of the latest page update. */
  updatedAt: Scalars['DateTime'];
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type ShopifyPageMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type ShopifyPageMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An auto-generated type for paginating through multiple Pages.
 *
 */
export type ShopifyPageConnection = {
  __typename?: 'PageConnection';
  /** A list of edges. */
  edges: Array<ShopifyPageEdge>;
  /** A list of the nodes contained in PageEdge. */
  nodes: Array<ShopifyPage>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one Page and a cursor during pagination.
 *
 */
export type ShopifyPageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of PageEdge. */
  node: ShopifyPage;
};

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 *
 */
export type ShopifyPageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars['String']>;
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean'];
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars['String']>;
};

/** The set of valid sort keys for the Page query. */
export enum ShopifyPageSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT'
}

/** A payment applied to a checkout. */
export type ShopifyPayment = ShopifyNode & {
  __typename?: 'Payment';
  /**
   * The amount of the payment.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money'];
  /** The amount of the payment. */
  amountV2: ShopifyMoneyV2;
  /** The billing address for the payment. */
  billingAddress?: Maybe<ShopifyMailingAddress>;
  /** The checkout to which the payment belongs. */
  checkout: ShopifyCheckout;
  /** The credit card used for the payment in the case of direct payments. */
  creditCard?: Maybe<ShopifyCreditCard>;
  /** A message describing a processing error during asynchronous processing. */
  errorMessage?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * A client-side generated token to identify a payment and perform idempotent operations.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
   *
   */
  idempotencyKey?: Maybe<Scalars['String']>;
  /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
  nextActionUrl?: Maybe<Scalars['URL']>;
  /** Whether the payment is still processing asynchronously. */
  ready: Scalars['Boolean'];
  /** A flag to indicate if the payment is to be done in test mode for gateways that support it. */
  test: Scalars['Boolean'];
  /** The actual transaction recorded by Shopify after having processed the payment with the gateway. */
  transaction?: Maybe<ShopifyTransaction>;
};

/** Settings related to payments. */
export type ShopifyPaymentSettings = {
  __typename?: 'PaymentSettings';
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<ShopifyCardBrand>;
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['URL'];
  /** The country where the shop is located. */
  countryCode: ShopifyCountryCode;
  /** The three-letter code for the shop's primary currency. */
  currencyCode: ShopifyCurrencyCode;
  /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
  enabledPresentmentCurrencies: Array<ShopifyCurrencyCode>;
  /** The shop’s Shopify Payments account id. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>;
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<ShopifyDigitalWallet>;
};

/** The valid values for the types of payment token. */
export enum ShopifyPaymentTokenType {
  /** Apple Pay token type. */
  ApplePay = 'APPLE_PAY',
  /** Google Pay token type. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay token type. */
  ShopifyPay = 'SHOPIFY_PAY',
  /** Stripe token type. */
  StripeVaultToken = 'STRIPE_VAULT_TOKEN',
  /** Vault payment token type. */
  Vault = 'VAULT'
}

/** A filter used to view a subset of products in a collection matching a specific price range. */
export type ShopifyPriceRangeFilter = {
  /** The maximum price in the range. Empty indicates no max price. */
  max?: InputMaybe<Scalars['Float']>;
  /** The minimum price in the range. Defaults to zero. */
  min?: InputMaybe<Scalars['Float']>;
};

/** The value of the percentage pricing object. */
export type ShopifyPricingPercentageValue = {
  __typename?: 'PricingPercentageValue';
  /** The percentage value of the object. */
  percentage: Scalars['Float'];
};

/** The price value (fixed or percentage) for a discount application. */
export type ShopifyPricingValue = ShopifyMoneyV2 | ShopifyPricingPercentageValue;

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProduct = ShopifyHasMetafields & ShopifyNode & ShopifyOnlineStorePublishable & {
  __typename?: 'Product';
  /** Indicates if at least one product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /** List of collections a product belongs to. */
  collections: ShopifyCollectionConnection;
  /** The compare at price of the product across all variants. */
  compareAtPriceRange: ShopifyProductPriceRange;
  /** The date and time when the product was created. */
  createdAt: Scalars['DateTime'];
  /** Stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String'];
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML'];
  /**
   * The featured image for the product.
   *
   * This field is functionally equivalent to `images(first: 1)`.
   *
   */
  featuredImage?: Maybe<ShopifyImage>;
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   *
   */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** List of images associated with the product. */
  images: ShopifyImageConnection;
  /** The media associated with the product. */
  media: ShopifyMediaConnection;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyMetafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyMetafieldConnection;
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>;
  /** List of product options. */
  options: Array<ShopifyProductOption>;
  /** The price range. */
  priceRange: ShopifyProductPriceRange;
  /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
  productType: Scalars['String'];
  /** The date and time when the product was published to the channel. */
  publishedAt: Scalars['DateTime'];
  /** Whether the product can only be purchased with a selling plan. */
  requiresSellingPlan: Scalars['Boolean'];
  /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
  sellingPlanGroups: ShopifySellingPlanGroupConnection;
  /** The product's SEO information. */
  seo: ShopifySeo;
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   *
   */
  tags: Array<Scalars['String']>;
  /** The product’s title. */
  title: Scalars['String'];
  /** The total quantity of inventory in stock for this Product. */
  totalInventory?: Maybe<Scalars['Int']>;
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   *
   */
  updatedAt: Scalars['DateTime'];
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   *
   */
  variantBySelectedOptions?: Maybe<ShopifyProductVariant>;
  /** List of the product’s variants. */
  variants: ShopifyProductVariantConnection;
  /** The product’s vendor name. */
  vendor: Scalars['String'];
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProductCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProductDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyProductImageSortKeys>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProductMediaArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyProductMediaSortKeys>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProductMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProductMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProductOptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProductSellingPlanGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProductVariantBySelectedOptionsArgs = {
  selectedOptions: Array<ShopifySelectedOptionInput>;
};


/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type ShopifyProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyProductVariantSortKeys>;
};

/** The set of valid sort keys for the ProductCollection query. */
export enum ShopifyProductCollectionSortKeys {
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE'
}

/**
 * An auto-generated type for paginating through multiple Products.
 *
 */
export type ShopifyProductConnection = {
  __typename?: 'ProductConnection';
  /** A list of edges. */
  edges: Array<ShopifyProductEdge>;
  /** A list of available filters. */
  filters: Array<ShopifyFilter>;
  /** A list of the nodes contained in ProductEdge. */
  nodes: Array<ShopifyProduct>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 *
 */
export type ShopifyProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductEdge. */
  node: ShopifyProduct;
};

/** A filter used to view a subset of products in a collection. */
export type ShopifyProductFilter = {
  /** Filter on if the product is available for sale. */
  available?: InputMaybe<Scalars['Boolean']>;
  /** A range of prices to filter with-in. */
  price?: InputMaybe<ShopifyPriceRangeFilter>;
  /** A product metafield to filter on. */
  productMetafield?: InputMaybe<ShopifyMetafieldFilter>;
  /** The product type to filter on. */
  productType?: InputMaybe<Scalars['String']>;
  /** The product vendor to filter on. */
  productVendor?: InputMaybe<Scalars['String']>;
  /** A variant metafield to filter on. */
  variantMetafield?: InputMaybe<ShopifyMetafieldFilter>;
  /** A variant option to filter on. */
  variantOption?: InputMaybe<ShopifyVariantOptionFilter>;
};

/** The set of valid sort keys for the ProductImage query. */
export enum ShopifyProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE'
}

/** The set of valid sort keys for the ProductMedia query. */
export enum ShopifyProductMediaSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE'
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 *
 */
export type ShopifyProductOption = ShopifyNode & {
  __typename?: 'ProductOption';
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The product option’s name. */
  name: Scalars['String'];
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>;
};

/** The price range of the product. */
export type ShopifyProductPriceRange = {
  __typename?: 'ProductPriceRange';
  /** The highest variant's price. */
  maxVariantPrice: ShopifyMoneyV2;
  /** The lowest variant's price. */
  minVariantPrice: ShopifyMoneyV2;
};

/** The set of valid sort keys for the Product query. */
export enum ShopifyProductSortKeys {
  /** Sort by the `best_selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR'
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ShopifyProductVariant = ShopifyHasMetafields & ShopifyNode & {
  __typename?: 'ProductVariant';
  /** Indicates if the product variant is available for sale. */
  availableForSale: Scalars['Boolean'];
  /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
  barcode?: Maybe<Scalars['String']>;
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.
   * @deprecated Use `compareAtPriceV2` instead
   */
  compareAtPrice?: Maybe<Scalars['Money']>;
  /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`. */
  compareAtPriceV2?: Maybe<ShopifyMoneyV2>;
  /** Whether a product is out of stock but still available for purchase (used for backorders). */
  currentlyNotInStock: Scalars['Boolean'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   *
   */
  image?: Maybe<ShopifyImage>;
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyMetafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyMetafieldConnection;
  /**
   * The product variant’s price.
   * @deprecated Use `priceV2` instead
   */
  price: Scalars['Money'];
  /** The product variant’s price. */
  priceV2: ShopifyMoneyV2;
  /** The product object that the product variant belongs to. */
  product: ShopifyProduct;
  /** The total sellable quantity of the variant for online sales channels. */
  quantityAvailable?: Maybe<Scalars['Int']>;
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean'];
  /** List of product options applied to the variant. */
  selectedOptions: Array<ShopifySelectedOption>;
  /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
  sellingPlanAllocations: ShopifySellingPlanAllocationConnection;
  /** The SKU (stock keeping unit) associated with the variant. */
  sku?: Maybe<Scalars['String']>;
  /** The in-store pickup availability of this variant by location. */
  storeAvailability: ShopifyStoreAvailabilityConnection;
  /** The product variant’s title. */
  title: Scalars['String'];
  /** The unit price value for the variant based on the variant's measurement. */
  unitPrice?: Maybe<ShopifyMoneyV2>;
  /** The unit price measurement for the variant. */
  unitPriceMeasurement?: Maybe<ShopifyUnitPriceMeasurement>;
  /** The weight of the product variant in the unit system specified with `weight_unit`. */
  weight?: Maybe<Scalars['Float']>;
  /** Unit of measurement for weight. */
  weightUnit: ShopifyWeightUnit;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ShopifyProductVariantMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ShopifyProductVariantMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ShopifyProductVariantSellingPlanAllocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};


/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type ShopifyProductVariantStoreAvailabilityArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An auto-generated type for paginating through multiple ProductVariants.
 *
 */
export type ShopifyProductVariantConnection = {
  __typename?: 'ProductVariantConnection';
  /** A list of edges. */
  edges: Array<ShopifyProductVariantEdge>;
  /** A list of the nodes contained in ProductVariantEdge. */
  nodes: Array<ShopifyProductVariant>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 *
 */
export type ShopifyProductVariantEdge = {
  __typename?: 'ProductVariantEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of ProductVariantEdge. */
  node: ShopifyProductVariant;
};

/** The set of valid sort keys for the ProductVariant query. */
export enum ShopifyProductVariantSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `title` value. */
  Title = 'TITLE'
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRoot = {
  __typename?: 'QueryRoot';
  /** List of the shop's articles. */
  articles: ShopifyArticleConnection;
  /** Fetch a specific `Blog` by one of its unique attributes. */
  blog?: Maybe<ShopifyBlog>;
  /**
   * Find a blog by its handle.
   * @deprecated Use `blog` instead
   */
  blogByHandle?: Maybe<ShopifyBlog>;
  /** List of the shop's blogs. */
  blogs: ShopifyBlogConnection;
  /** Find a cart by its ID. */
  cart?: Maybe<ShopifyCart>;
  /** Fetch a specific `Collection` by one of its unique attributes. */
  collection?: Maybe<ShopifyCollection>;
  /**
   * Find a collection by its handle.
   * @deprecated Use `collection` instead
   */
  collectionByHandle?: Maybe<ShopifyCollection>;
  /** List of the shop’s collections. */
  collections: ShopifyCollectionConnection;
  /** Find a customer by its access token. */
  customer?: Maybe<ShopifyCustomer>;
  /** Returns the localized experiences configured for the shop. */
  localization: ShopifyLocalization;
  /**
   * List of the shop's locations that support in-store pickup.
   *
   * When sorting by distance, you must specify a location via the `near` argument.
   *
   */
  locations: ShopifyLocationConnection;
  /** A storefront menu. */
  menu?: Maybe<ShopifyMenu>;
  /** Returns a specific node by ID. */
  node?: Maybe<ShopifyNode>;
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<ShopifyNode>>;
  /** Fetch a specific `Page` by one of its unique attributes. */
  page?: Maybe<ShopifyPage>;
  /**
   * Find a page by its handle.
   * @deprecated Use `page` instead
   */
  pageByHandle?: Maybe<ShopifyPage>;
  /** List of the shop's pages. */
  pages: ShopifyPageConnection;
  /** Fetch a specific `Product` by one of its unique attributes. */
  product?: Maybe<ShopifyProduct>;
  /**
   * Find a product by its handle.
   * @deprecated Use `product` instead
   */
  productByHandle?: Maybe<ShopifyProduct>;
  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   *
   */
  productRecommendations?: Maybe<Array<ShopifyProduct>>;
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   *
   */
  productTags: ShopifyStringConnection;
  /** List of product types for the shop's products that are published to your app. */
  productTypes: ShopifyStringConnection;
  /** List of the shop’s products. */
  products: ShopifyProductConnection;
  /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ShopifyApiVersion>;
  /** The shop associated with the storefront access token. */
  shop: ShopifyShop;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyArticleSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootBlogArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootBlogByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootBlogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyBlogSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootCartArgs = {
  id: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootCollectionArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootCollectionByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyCollectionSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootCustomerArgs = {
  customerAccessToken: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootLocationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  near?: InputMaybe<ShopifyGeoCoordinateInput>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyLocationSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootMenuArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootNodeArgs = {
  id: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootNodesArgs = {
  ids: Array<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootPageArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootPageByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyPageSortKeys>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootProductArgs = {
  handle?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootProductByHandleArgs = {
  handle: Scalars['String'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootProductRecommendationsArgs = {
  productId: Scalars['ID'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootProductTagsArgs = {
  first: Scalars['Int'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootProductTypesArgs = {
  first: Scalars['Int'];
};


/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type ShopifyQueryRootProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  query?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
  sortKey?: InputMaybe<ShopifyProductSortKeys>;
};

/** SEO information. */
export type ShopifySeo = {
  __typename?: 'SEO';
  /** The meta description. */
  description?: Maybe<Scalars['String']>;
  /** The SEO title. */
  title?: Maybe<Scalars['String']>;
};

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 *
 */
export type ShopifyScriptDiscountApplication = ShopifyDiscountApplication & {
  __typename?: 'ScriptDiscountApplication';
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: ShopifyDiscountApplicationAllocationMethod;
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: ShopifyDiscountApplicationTargetSelection;
  /** The type of line that the discount is applicable towards. */
  targetType: ShopifyDiscountApplicationTargetType;
  /** The title of the application as defined by the Script. */
  title: Scalars['String'];
  /** The value of the discount application. */
  value: ShopifyPricingValue;
};

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 *
 */
export type ShopifySelectedOption = {
  __typename?: 'SelectedOption';
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** Specifies the input fields required for a selected option. */
export type ShopifySelectedOptionInput = {
  /** The product option’s name. */
  name: Scalars['String'];
  /** The product option’s value. */
  value: Scalars['String'];
};

/** Represents how products and variants can be sold and purchased. */
export type ShopifySellingPlan = {
  __typename?: 'SellingPlan';
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String'];
  /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<ShopifySellingPlanOption>;
  /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
  priceAdjustments: Array<ShopifySellingPlanPriceAdjustment>;
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean'];
};

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export type ShopifySellingPlanAllocation = {
  __typename?: 'SellingPlanAllocation';
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
  priceAdjustments: Array<ShopifySellingPlanAllocationPriceAdjustment>;
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: ShopifySellingPlan;
};

/**
 * An auto-generated type for paginating through multiple SellingPlanAllocations.
 *
 */
export type ShopifySellingPlanAllocationConnection = {
  __typename?: 'SellingPlanAllocationConnection';
  /** A list of edges. */
  edges: Array<ShopifySellingPlanAllocationEdge>;
  /** A list of the nodes contained in SellingPlanAllocationEdge. */
  nodes: Array<ShopifySellingPlanAllocation>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.
 *
 */
export type ShopifySellingPlanAllocationEdge = {
  __typename?: 'SellingPlanAllocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanAllocationEdge. */
  node: ShopifySellingPlanAllocation;
};

/** The resulting prices for variants when they're purchased with a specific selling plan. */
export type ShopifySellingPlanAllocationPriceAdjustment = {
  __typename?: 'SellingPlanAllocationPriceAdjustment';
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: ShopifyMoneyV2;
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: ShopifyMoneyV2;
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: ShopifyMoneyV2;
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe<ShopifyMoneyV2>;
};

/**
 * An auto-generated type for paginating through multiple SellingPlans.
 *
 */
export type ShopifySellingPlanConnection = {
  __typename?: 'SellingPlanConnection';
  /** A list of edges. */
  edges: Array<ShopifySellingPlanEdge>;
  /** A list of the nodes contained in SellingPlanEdge. */
  nodes: Array<ShopifySellingPlan>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 *
 */
export type ShopifySellingPlanEdge = {
  __typename?: 'SellingPlanEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanEdge. */
  node: ShopifySellingPlan;
};

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export type ShopifySellingPlanFixedAmountPriceAdjustment = {
  __typename?: 'SellingPlanFixedAmountPriceAdjustment';
  /** The money value of the price adjustment. */
  adjustmentAmount: ShopifyMoneyV2;
};

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export type ShopifySellingPlanFixedPriceAdjustment = {
  __typename?: 'SellingPlanFixedPriceAdjustment';
  /** A new price of the variant when it's purchased with the selling plan. */
  price: ShopifyMoneyV2;
};

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type ShopifySellingPlanGroup = {
  __typename?: 'SellingPlanGroup';
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe<Scalars['String']>;
  /** The name of the selling plan group. */
  name: Scalars['String'];
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<ShopifySellingPlanGroupOption>;
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: ShopifySellingPlanConnection;
};


/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type ShopifySellingPlanGroupSellingPlansArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 *
 */
export type ShopifySellingPlanGroupConnection = {
  __typename?: 'SellingPlanGroupConnection';
  /** A list of edges. */
  edges: Array<ShopifySellingPlanGroupEdge>;
  /** A list of the nodes contained in SellingPlanGroupEdge. */
  nodes: Array<ShopifySellingPlanGroup>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 *
 */
export type ShopifySellingPlanGroupEdge = {
  __typename?: 'SellingPlanGroupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of SellingPlanGroupEdge. */
  node: ShopifySellingPlanGroup;
};

/** Represents an option on a selling plan group that's available in the drop-down list in the storefront. */
export type ShopifySellingPlanGroupOption = {
  __typename?: 'SellingPlanGroupOption';
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars['String'];
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']>;
};

/** An option provided by a Selling Plan. */
export type ShopifySellingPlanOption = {
  __typename?: 'SellingPlanOption';
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']>;
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']>;
};

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export type ShopifySellingPlanPercentagePriceAdjustment = {
  __typename?: 'SellingPlanPercentagePriceAdjustment';
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Int'];
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type ShopifySellingPlanPriceAdjustment = {
  __typename?: 'SellingPlanPriceAdjustment';
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: ShopifySellingPlanPriceAdjustmentValue;
  /** The number of orders that the price adjustment applies to If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']>;
};

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type ShopifySellingPlanPriceAdjustmentValue = ShopifySellingPlanFixedAmountPriceAdjustment | ShopifySellingPlanFixedPriceAdjustment | ShopifySellingPlanPercentagePriceAdjustment;

/** A shipping rate to be applied to a checkout. */
export type ShopifyShippingRate = {
  __typename?: 'ShippingRate';
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String'];
  /**
   * Price of this shipping rate.
   * @deprecated Use `priceV2` instead
   */
  price: Scalars['Money'];
  /** Price of this shipping rate. */
  priceV2: ShopifyMoneyV2;
  /** Title of this shipping rate. */
  title: Scalars['String'];
};

/** Shop represents a collection of the general settings and information about the shop. */
export type ShopifyShop = ShopifyHasMetafields & ShopifyNode & {
  __typename?: 'Shop';
  /** A description of the shop. */
  description?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<ShopifyMetafield>;
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: ShopifyMetafieldConnection;
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String'];
  /** The shop’s name. */
  name: Scalars['String'];
  /** Settings related to payments. */
  paymentSettings: ShopifyPaymentSettings;
  /** The shop’s primary domain. */
  primaryDomain: ShopifyDomain;
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<ShopifyShopPolicy>;
  /** The shop’s refund policy. */
  refundPolicy?: Maybe<ShopifyShopPolicy>;
  /** The shop’s shipping policy. */
  shippingPolicy?: Maybe<ShopifyShopPolicy>;
  /** Countries that the shop ships to. */
  shipsToCountries: Array<ShopifyCountryCode>;
  /** The shop’s subscription policy. */
  subscriptionPolicy?: Maybe<ShopifyShopPolicyWithDefault>;
  /** The shop’s terms of service. */
  termsOfService?: Maybe<ShopifyShopPolicy>;
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopifyShopMetafieldArgs = {
  key: Scalars['String'];
  namespace: Scalars['String'];
};


/** Shop represents a collection of the general settings and information about the shop. */
export type ShopifyShopMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  namespace?: InputMaybe<Scalars['String']>;
  reverse?: InputMaybe<Scalars['Boolean']>;
};

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export type ShopifyShopPolicy = ShopifyNode & {
  __typename?: 'ShopPolicy';
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String'];
  /** Policy’s handle. */
  handle: Scalars['String'];
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** Policy’s title. */
  title: Scalars['String'];
  /** Public URL to the policy. */
  url: Scalars['URL'];
};

/**
 * A policy for the store that comes with a default value, such as a subscription policy.
 * If the merchant hasn't configured a policy for their store, then the policy will return the default value.
 * Otherwise, the policy will return the merchant-configured value.
 *
 */
export type ShopifyShopPolicyWithDefault = {
  __typename?: 'ShopPolicyWithDefault';
  /** The text of the policy. Maximum size: 64KB. */
  body: Scalars['String'];
  /** The handle of the policy. */
  handle: Scalars['String'];
  /** The unique identifier of the policy. A default policy doesn't have an ID. */
  id?: Maybe<Scalars['ID']>;
  /** The title of the policy. */
  title: Scalars['String'];
  /** Public URL to the policy. */
  url: Scalars['URL'];
};

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 *
 */
export type ShopifyStoreAvailability = {
  __typename?: 'StoreAvailability';
  /** Whether the product variant is in-stock at this location. */
  available: Scalars['Boolean'];
  /** The location where this product variant is stocked at. */
  location: ShopifyLocation;
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String'];
};

/**
 * An auto-generated type for paginating through multiple StoreAvailabilities.
 *
 */
export type ShopifyStoreAvailabilityConnection = {
  __typename?: 'StoreAvailabilityConnection';
  /** A list of edges. */
  edges: Array<ShopifyStoreAvailabilityEdge>;
  /** A list of the nodes contained in StoreAvailabilityEdge. */
  nodes: Array<ShopifyStoreAvailability>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one StoreAvailability and a cursor during pagination.
 *
 */
export type ShopifyStoreAvailabilityEdge = {
  __typename?: 'StoreAvailabilityEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StoreAvailabilityEdge. */
  node: ShopifyStoreAvailability;
};

/**
 * An auto-generated type for paginating through a list of Strings.
 *
 */
export type ShopifyStringConnection = {
  __typename?: 'StringConnection';
  /** A list of edges. */
  edges: Array<ShopifyStringEdge>;
  /** Information to aid in pagination. */
  pageInfo: ShopifyPageInfo;
};

/**
 * An auto-generated type which holds one String and a cursor during pagination.
 *
 */
export type ShopifyStringEdge = {
  __typename?: 'StringEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of StringEdge. */
  node: Scalars['String'];
};

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type ShopifyTokenizedPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money'];
  /** The billing address for the payment. */
  billingAddress: ShopifyMailingAddressInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>;
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String'];
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>;
  /** The type of payment token. */
  type: Scalars['String'];
};

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type ShopifyTokenizedPaymentInputV2 = {
  /** The billing address for the payment. */
  billingAddress: ShopifyMailingAddressInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>;
  /** The amount and currency of the payment. */
  paymentAmount: ShopifyMoneyInput;
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String'];
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>;
  /** The type of payment token. */
  type: Scalars['String'];
};

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type ShopifyTokenizedPaymentInputV3 = {
  /** The billing address for the payment. */
  billingAddress: ShopifyMailingAddressInput;
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String'];
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>;
  /** The amount and currency of the payment. */
  paymentAmount: ShopifyMoneyInput;
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String'];
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>;
  /** The type of payment token. */
  type: ShopifyPaymentTokenType;
};

/** An object representing exchange of money for a product or service. */
export type ShopifyTransaction = {
  __typename?: 'Transaction';
  /**
   * The amount of money that the transaction was for.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money'];
  /** The amount of money that the transaction was for. */
  amountV2: ShopifyMoneyV2;
  /** The kind of the transaction. */
  kind: ShopifyTransactionKind;
  /**
   * The status of the transaction.
   * @deprecated Use `statusV2` instead
   */
  status: ShopifyTransactionStatus;
  /** The status of the transaction. */
  statusV2?: Maybe<ShopifyTransactionStatus>;
  /** Whether the transaction was done in test mode or not. */
  test: Scalars['Boolean'];
};

/** The different kinds of order transactions. */
export enum ShopifyTransactionKind {
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   *
   */
  Authorization = 'AUTHORIZATION',
  /** A transfer of the money that was reserved during the authorization stage. */
  Capture = 'CAPTURE',
  /** Money returned to the customer when they have paid too much. */
  Change = 'CHANGE',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorization = 'EMV_AUTHORIZATION',
  /** An authorization and capture performed together in a single step. */
  Sale = 'SALE'
}

/** Transaction statuses describe the status of a transaction. */
export enum ShopifyTransactionStatus {
  /** There was an error while processing the transaction. */
  Error = 'ERROR',
  /** The transaction failed. */
  Failure = 'FAILURE',
  /** The transaction is pending. */
  Pending = 'PENDING',
  /** The transaction succeeded. */
  Success = 'SUCCESS'
}

/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 *
 */
export type ShopifyUnitPriceMeasurement = {
  __typename?: 'UnitPriceMeasurement';
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<ShopifyUnitPriceMeasurementMeasuredType>;
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<ShopifyUnitPriceMeasurementMeasuredUnit>;
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float'];
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<ShopifyUnitPriceMeasurementMeasuredUnit>;
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int'];
};

/** The accepted types of unit of measurement. */
export enum ShopifyUnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing areas. */
  Area = 'AREA',
  /** Unit of measurements representing lengths. */
  Length = 'LENGTH',
  /** Unit of measurements representing volumes. */
  Volume = 'VOLUME',
  /** Unit of measurements representing weights. */
  Weight = 'WEIGHT'
}

/** The valid units of measurement for a unit price measurement. */
export enum ShopifyUnitPriceMeasurementMeasuredUnit {
  /** 100 centiliters equals 1 liter. */
  Cl = 'CL',
  /** 100 centimeters equals 1 meter. */
  Cm = 'CM',
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 kilogram equals 1000 grams. */
  Kg = 'KG',
  /** Metric system unit of volume. */
  L = 'L',
  /** Metric system unit of length. */
  M = 'M',
  /** Metric system unit of area. */
  M2 = 'M2',
  /** 1 cubic meter equals 1000 liters. */
  M3 = 'M3',
  /** 1000 milligrams equals 1 gram. */
  Mg = 'MG',
  /** 1000 milliliters equals 1 liter. */
  Ml = 'ML',
  /** 1000 millimeters equals 1 meter. */
  Mm = 'MM'
}

/** Systems of weights and measures. */
export enum ShopifyUnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystem = 'METRIC_SYSTEM'
}

/** Represents an error in the input of a mutation. */
export type ShopifyUserError = ShopifyDisplayableError & {
  __typename?: 'UserError';
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>;
  /** The error message. */
  message: Scalars['String'];
};

/** A filter used to view a subset of products in a collection matching a specific variant option. */
export type ShopifyVariantOptionFilter = {
  /** The name of the variant option to filter on. */
  name: Scalars['String'];
  /** The value of the variant option to filter on. */
  value: Scalars['String'];
};

/** Represents a Shopify hosted video. */
export type ShopifyVideo = ShopifyMedia & ShopifyNode & {
  __typename?: 'Video';
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>;
  /** A globally-unique identifier. */
  id: Scalars['ID'];
  /** The media content type. */
  mediaContentType: ShopifyMediaContentType;
  /** The preview image for the media. */
  previewImage?: Maybe<ShopifyImage>;
  /** The sources for a video. */
  sources: Array<ShopifyVideoSource>;
};

/** Represents a source for a Shopify hosted video. */
export type ShopifyVideoSource = {
  __typename?: 'VideoSource';
  /** The format of the video source. */
  format: Scalars['String'];
  /** The height of the video. */
  height: Scalars['Int'];
  /** The video MIME type. */
  mimeType: Scalars['String'];
  /** The URL of the video. */
  url: Scalars['String'];
  /** The width of the video. */
  width: Scalars['Int'];
};

/** Units of measurement for weight. */
export enum ShopifyWeightUnit {
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS'
}

export type ShopifyCartDetailsFragment = { __typename?: 'Cart', id: string, lines: { __typename?: 'CartLineConnection', nodes: Array<{ __typename?: 'CartLine', quantity: number, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any }, image?: { __typename?: 'Image', url: any, id?: string | null } | null, product: { __typename?: 'Product', handle: string, id: string } } }> } };

export type ShopifyCreateCartMutationVariables = Exact<{ [key: string]: never; }>;


export type ShopifyCreateCartMutation = { __typename?: 'Mutation', cartCreate?: { __typename?: 'CartCreatePayload', cart?: { __typename?: 'Cart', id: string, lines: { __typename?: 'CartLineConnection', nodes: Array<{ __typename?: 'CartLine', quantity: number, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any }, image?: { __typename?: 'Image', url: any, id?: string | null } | null, product: { __typename?: 'Product', handle: string, id: string } } }> } } | null } | null };

export type ShopifyCartBuyerIdentityUpdateMutationVariables = Exact<{
  cartId: Scalars['ID'];
  buyerIdentity: ShopifyCartBuyerIdentityInput;
}>;


export type ShopifyCartBuyerIdentityUpdateMutation = { __typename?: 'Mutation', cartBuyerIdentityUpdate?: { __typename?: 'CartBuyerIdentityUpdatePayload', cart?: { __typename?: 'Cart', id: string, lines: { __typename?: 'CartLineConnection', nodes: Array<{ __typename?: 'CartLine', quantity: number, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any }, image?: { __typename?: 'Image', url: any, id?: string | null } | null, product: { __typename?: 'Product', handle: string, id: string } } }> } } | null } | null };

export type ShopifyCartDiscountCodesUpdateMutationVariables = Exact<{
  cartId: Scalars['ID'];
  discountCodes?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type ShopifyCartDiscountCodesUpdateMutation = { __typename?: 'Mutation', cartDiscountCodesUpdate?: { __typename?: 'CartDiscountCodesUpdatePayload', cart?: { __typename?: 'Cart', id: string, lines: { __typename?: 'CartLineConnection', nodes: Array<{ __typename?: 'CartLine', quantity: number, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any }, image?: { __typename?: 'Image', url: any, id?: string | null } | null, product: { __typename?: 'Product', handle: string, id: string } } }> } } | null } | null };

export type ShopifyCartLinesAddMutationVariables = Exact<{
  cartId: Scalars['ID'];
  lines: Array<ShopifyCartLineInput> | ShopifyCartLineInput;
}>;


export type ShopifyCartLinesAddMutation = { __typename?: 'Mutation', cartLinesAdd?: { __typename?: 'CartLinesAddPayload', cart?: { __typename?: 'Cart', id: string, lines: { __typename?: 'CartLineConnection', nodes: Array<{ __typename?: 'CartLine', quantity: number, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any }, image?: { __typename?: 'Image', url: any, id?: string | null } | null, product: { __typename?: 'Product', handle: string, id: string } } }> } } | null } | null };

export type ShopifyCartLinesRemoveMutationVariables = Exact<{
  cartId: Scalars['ID'];
  lineIds: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type ShopifyCartLinesRemoveMutation = { __typename?: 'Mutation', cartLinesRemove?: { __typename?: 'CartLinesRemovePayload', cart?: { __typename?: 'Cart', id: string, lines: { __typename?: 'CartLineConnection', nodes: Array<{ __typename?: 'CartLine', quantity: number, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any }, image?: { __typename?: 'Image', url: any, id?: string | null } | null, product: { __typename?: 'Product', handle: string, id: string } } }> } } | null } | null };

export type ShopifyCartLinesUpdateMutationVariables = Exact<{
  cartId: Scalars['ID'];
  lines: Array<ShopifyCartLineUpdateInput> | ShopifyCartLineUpdateInput;
}>;


export type ShopifyCartLinesUpdateMutation = { __typename?: 'Mutation', cartLinesUpdate?: { __typename?: 'CartLinesUpdatePayload', cart?: { __typename?: 'Cart', id: string, lines: { __typename?: 'CartLineConnection', nodes: Array<{ __typename?: 'CartLine', quantity: number, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any }, image?: { __typename?: 'Image', url: any, id?: string | null } | null, product: { __typename?: 'Product', handle: string, id: string } } }> } } | null } | null };

export type ShopifyGetLiteCartQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ShopifyGetLiteCartQuery = { __typename?: 'QueryRoot', cart?: { __typename?: 'Cart', id: string, lines: { __typename?: 'CartLineConnection', nodes: Array<{ __typename?: 'CartLine', quantity: number, merchandise: { __typename?: 'ProductVariant', id: string, title: string, priceV2: { __typename?: 'MoneyV2', amount: any }, image?: { __typename?: 'Image', url: any, id?: string | null } | null, product: { __typename?: 'Product', handle: string, id: string } } }> } } | null };

export type ShopifyGetAllCollectionsQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type ShopifyGetAllCollectionsQuery = { __typename?: 'QueryRoot', collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', id: string, title: string, handle: string } }> } };

export type ShopifyGetCollectionByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ShopifyGetCollectionByIdQuery = { __typename?: 'QueryRoot', collection?: { __typename?: 'Collection', id: string, handle: string, description: string, descriptionHtml: any, title: string } | null };

export type ShopifyGetCollectionByIdWithProductsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ShopifyGetCollectionByIdWithProductsQuery = { __typename?: 'QueryRoot', collection?: { __typename?: 'Collection', id: string, handle: string, description: string, descriptionHtml: any, products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string, handle: string, title: string, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null, url: any } }> }, priceRange: { __typename?: 'ProductPriceRange', maxVariantPrice: { __typename?: 'MoneyV2', amount: any }, minVariantPrice: { __typename?: 'MoneyV2', amount: any } }, collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', id: string, handle: string, title: string } }> } } }> } } | null };

export type ShopifyGetCollectionByHandleWithProductsQueryVariables = Exact<{
  handle: Scalars['String'];
}>;


export type ShopifyGetCollectionByHandleWithProductsQuery = { __typename?: 'QueryRoot', collection?: { __typename?: 'Collection', id: string, handle: string, description: string, descriptionHtml: any, products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string, handle: string, title: string, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null, url: any } }> }, priceRange: { __typename?: 'ProductPriceRange', maxVariantPrice: { __typename?: 'MoneyV2', amount: any }, minVariantPrice: { __typename?: 'MoneyV2', amount: any } }, collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', id: string, handle: string, title: string } }> } } }> } } | null };

export type ShopifyGetMenuByHandleQueryVariables = Exact<{
  handle: Scalars['String'];
}>;


export type ShopifyGetMenuByHandleQuery = { __typename?: 'QueryRoot', menu?: { __typename?: 'Menu', itemsCount: number, id: string, items: Array<{ __typename?: 'MenuItem', id: string, url?: any | null, type: ShopifyMenuItemType, title: string, resourceId?: string | null, items: Array<{ __typename?: 'MenuItem', id: string, url?: any | null, type: ShopifyMenuItemType, title: string, resourceId?: string | null }> }> } | null };

export type ShopifyProductsDetailsFragment = { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string, handle: string, title: string, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null, url: any } }> }, priceRange: { __typename?: 'ProductPriceRange', maxVariantPrice: { __typename?: 'MoneyV2', amount: any }, minVariantPrice: { __typename?: 'MoneyV2', amount: any } }, collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', id: string, handle: string, title: string } }> } } }> };

export type ShopifyProductDetailsFragment = { __typename?: 'Product', id: string, availableForSale: boolean, description: string, productType: string, tags: Array<string>, title: string, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null, url: any } }> }, priceRange: { __typename?: 'ProductPriceRange', maxVariantPrice: { __typename?: 'MoneyV2', amount: any }, minVariantPrice: { __typename?: 'MoneyV2', amount: any } }, options: Array<{ __typename?: 'ProductOption', id: string, name: string, values: Array<string> }> };

export type ShopifyProductVariantDetailsFragment = { __typename?: 'Product', id: string, availableForSale: boolean, description: string, productType: string, tags: Array<string>, title: string, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null, url: any } }> }, priceRange: { __typename?: 'ProductPriceRange', maxVariantPrice: { __typename?: 'MoneyV2', amount: any }, minVariantPrice: { __typename?: 'MoneyV2', amount: any } } };

export type ShopifyGetAllProductsQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type ShopifyGetAllProductsQuery = { __typename?: 'QueryRoot', products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string } }> } };

export type ShopifyGetProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ShopifyGetProductByIdQuery = { __typename?: 'QueryRoot', product?: { __typename?: 'Product', id: string, availableForSale: boolean, description: string, productType: string, tags: Array<string>, title: string, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null, url: any } }> }, priceRange: { __typename?: 'ProductPriceRange', maxVariantPrice: { __typename?: 'MoneyV2', amount: any }, minVariantPrice: { __typename?: 'MoneyV2', amount: any } }, options: Array<{ __typename?: 'ProductOption', id: string, name: string, values: Array<string> }> } | null };

export type ShopifyGetProductByHandleQueryVariables = Exact<{
  handle: Scalars['String'];
}>;


export type ShopifyGetProductByHandleQuery = { __typename?: 'QueryRoot', product?: { __typename?: 'Product', id: string, availableForSale: boolean, description: string, productType: string, tags: Array<string>, title: string, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null, url: any } }> }, priceRange: { __typename?: 'ProductPriceRange', maxVariantPrice: { __typename?: 'MoneyV2', amount: any }, minVariantPrice: { __typename?: 'MoneyV2', amount: any } }, options: Array<{ __typename?: 'ProductOption', id: string, name: string, values: Array<string> }> } | null };

export type ShopifyGetProductByHandleVariantBySelectedOptionsQueryVariables = Exact<{
  handle: Scalars['String'];
  selectedOptions: Array<ShopifySelectedOptionInput> | ShopifySelectedOptionInput;
}>;


export type ShopifyGetProductByHandleVariantBySelectedOptionsQuery = { __typename?: 'QueryRoot', product?: { __typename?: 'Product', id: string, variantBySelectedOptions?: { __typename?: 'ProductVariant', id: string, priceV2: { __typename?: 'MoneyV2', amount: any }, product: { __typename?: 'Product', id: string, availableForSale: boolean, description: string, productType: string, tags: Array<string>, title: string, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null, url: any } }> }, priceRange: { __typename?: 'ProductPriceRange', maxVariantPrice: { __typename?: 'MoneyV2', amount: any }, minVariantPrice: { __typename?: 'MoneyV2', amount: any } } } } | null } | null };

export type ShopifyGetNewArrivalsQueryVariables = Exact<{
  first: Scalars['Int'];
}>;


export type ShopifyGetNewArrivalsQuery = { __typename?: 'QueryRoot', products: { __typename?: 'ProductConnection', edges: Array<{ __typename?: 'ProductEdge', node: { __typename?: 'Product', id: string, handle: string, title: string, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', id?: string | null, url: any } }> }, priceRange: { __typename?: 'ProductPriceRange', maxVariantPrice: { __typename?: 'MoneyV2', amount: any }, minVariantPrice: { __typename?: 'MoneyV2', amount: any } }, collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', id: string, handle: string, title: string } }> } } }> } };

export type ShopifyGetProductsRecommendationsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ShopifyGetProductsRecommendationsQuery = { __typename?: 'QueryRoot', productRecommendations?: Array<{ __typename?: 'Product', id: string, title: string, handle: string, images: { __typename?: 'ImageConnection', edges: Array<{ __typename?: 'ImageEdge', node: { __typename?: 'Image', url: any, id?: string | null } }> }, priceRange: { __typename?: 'ProductPriceRange', minVariantPrice: { __typename?: 'MoneyV2', amount: any }, maxVariantPrice: { __typename?: 'MoneyV2', amount: any } }, collections: { __typename?: 'CollectionConnection', edges: Array<{ __typename?: 'CollectionEdge', node: { __typename?: 'Collection', id: string, handle: string } }> } }> | null };
