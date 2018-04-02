// db tables and columns

const AUTHORS_COLUMNS = {id, name, sort, link};
const BOOKS_COLUMNS = {id, title, sort, timestamp, pubdate, series_index, author_sort, isbn, lccn, path, flags, uuid, has_cover, last_modified};
const BOOKS_AUTHORS_LINK_COLUMNS = {id, book, author};
const BOOKS_LANGUAGES_LINK_COLUMNS = {id, name};
const BOOKS_LANGUAGES_LINK_COLUMNS = {id, book, lang_code, item_order};
const BOOKS_PLUGIN_DATA_COLUMNS = {};
const BOOKS_PUBLISHERS_LINK_COLUMNS = {id, book, publisher};
const BOOKS_RATINGS_LINK_COLUMNS = {id, book, rating};
const BOOKS_SERIES_LINK_COLUMNS = {id, book, series};
const BOOKS_TAGS_LINK_COLUMNS = {id, book, tag};
const COMMENTS_COLUMNS = {id, book, text};
const CONVERSION_OPTIONS_COLUMNS = {id, format, book, data};
const CUSTOM_COLUMNS_COLUMNS = {};
const DATA_COLUMNS = {id, book, format, uncompressed_size, name};
const FEEDS_COLUMNS = {};
const IDENTIFIERS_COLUMNS = {id, book, type, val};
const LANGUAGES_COLUMNS = {id, lang_code};
const library_id_columns = {id, uuid};
const METADATA_DIRTIED_COLUMNS = {};
const PREFERENCES_COLUMNS = {id, key, val};
const PUBLISHERS_COLUMNS = {id, name, sort};
const RATINGS_COLUMNS = {id,rating};
const SERIES_COLUMNS = {id, name, sort};
const TAGS_COLUMNS = {id, name};

