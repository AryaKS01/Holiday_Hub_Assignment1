{
    "_readme": [
        "This file locks the dependencies of your project to a known state",
        "Read more about it at https://getcomposer.org/doc/01-basic-usage.md#installing-dependencies",
        "This file is @generated automatically"
    ],
    "content-hash": "753caf2a7602b577b682a4255e7c1425",
    "packages": [
        {
            "name": "brick/math",
            "version": "0.12.3",
            "source": {
                "type": "git",
                "url": "https://github.com/brick/math.git",
                "reference": "866551da34e9a618e64a819ee1e01c20d8a588ba"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/brick/math/zipball/866551da34e9a618e64a819ee1e01c20d8a588ba",
                "reference": "866551da34e9a618e64a819ee1e01c20d8a588ba",
                "shasum": ""
            },
            "require": {
                "php": "^8.1"
            },
            "require-dev": {
                "php-coveralls/php-coveralls": "^2.2",
                "phpunit/phpunit": "^10.1",
                "vimeo/psalm": "6.8.8"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Brick\\Math\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Arbitrary-precision arithmetic library",
            "keywords": [
                "Arbitrary-precision",
                "BigInteger",
                "BigRational",
                "arithmetic",
                "bigdecimal",
                "bignum",
                "bignumber",
                "brick",
                "decimal",
                "integer",
                "math",
                "mathematics",
                "rational"
            ],
            "support": {
                "issues": "https://github.com/brick/math/issues",
                "source": "https://github.com/brick/math/tree/0.12.3"
            },
            "funding": [
                {
                    "url": "https://github.com/BenMorel",
                    "type": "github"
                }
            ],
            "time": "2025-02-28T13:11:00+00:00"
        },
        {
            "name": "carbonphp/carbon-doctrine-types",
            "version": "3.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/CarbonPHP/carbon-doctrine-types.git",
                "reference": "18ba5ddfec8976260ead6e866180bd5d2f71aa1d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/CarbonPHP/carbon-doctrine-types/zipball/18ba5ddfec8976260ead6e866180bd5d2f71aa1d",
                "reference": "18ba5ddfec8976260ead6e866180bd5d2f71aa1d",
                "shasum": ""
            },
            "require": {
                "php": "^8.1"
            },
            "conflict": {
                "doctrine/dbal": "<4.0.0 || >=5.0.0"
            },
            "require-dev": {
                "doctrine/dbal": "^4.0.0",
                "nesbot/carbon": "^2.71.0 || ^3.0.0",
                "phpunit/phpunit": "^10.3"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Carbon\\Doctrine\\": "src/Carbon/Doctrine/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "KyleKatarn",
                    "email": "kylekatarnls@gmail.com"
                }
            ],
            "description": "Types to use Carbon in Doctrine",
            "keywords": [
                "carbon",
                "date",
                "datetime",
                "doctrine",
                "time"
            ],
            "support": {
                "issues": "https://github.com/CarbonPHP/carbon-doctrine-types/issues",
                "source": "https://github.com/CarbonPHP/carbon-doctrine-types/tree/3.2.0"
            },
            "funding": [
                {
                    "url": "https://github.com/kylekatarnls",
                    "type": "github"
                },
                {
                    "url": "https://opencollective.com/Carbon",
                    "type": "open_collective"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/nesbot/carbon",
                    "type": "tidelift"
                }
            ],
            "time": "2024-02-09T16:56:22+00:00"
        },
        {
            "name": "colinmollenhour/cache-backend-redis",
            "version": "1.17.1",
            "source": {
                "type": "git",
                "url": "https://github.com/colinmollenhour/Cm_Cache_Backend_Redis.git",
                "reference": "d403f4473e1b3cc616fa59d187e817543b6620c1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/colinmollenhour/Cm_Cache_Backend_Redis/zipball/d403f4473e1b3cc616fa59d187e817543b6620c1",
                "reference": "d403f4473e1b3cc616fa59d187e817543b6620c1",
                "shasum": ""
            },
            "require": {
                "colinmollenhour/credis": "^1.14"
            },
            "require-dev": {
                "friendsofphp/php-cs-fixer": "^3.4",
                "phpunit/phpunit": "^9",
                "zf1s/zend-cache": "~1.15"
            },
            "type": "magento-module",
            "autoload": {
                "classmap": [
                    "Cm/Cache/Backend/Redis.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause-Modification"
            ],
            "authors": [
                {
                    "name": "Colin Mollenhour"
                }
            ],
            "description": "Zend_Cache backend using Redis with full support for tags.",
            "homepage": "https://github.com/colinmollenhour/Cm_Cache_Backend_Redis",
            "support": {
                "issues": "https://github.com/colinmollenhour/Cm_Cache_Backend_Redis/issues",
                "source": "https://github.com/colinmollenhour/Cm_Cache_Backend_Redis/tree/1.17.1"
            },
            "time": "2023-12-21T21:56:18+00:00"
        },
        {
            "name": "colinmollenhour/credis",
            "version": "v1.17.0",
            "source": {
                "type": "git",
                "url": "https://github.com/colinmollenhour/credis.git",
                "reference": "f4930b426f6b1238b687a1ffe6ee5af7f835b40a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/colinmollenhour/credis/zipball/f4930b426f6b1238b687a1ffe6ee5af7f835b40a",
                "reference": "f4930b426f6b1238b687a1ffe6ee5af7f835b40a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.4.0"
            },
            "suggest": {
                "ext-redis": "Improved performance for communicating with redis"
            },
            "type": "library",
            "autoload": {
                "classmap": [
                    "Client.php",
                    "Cluster.php",
                    "Sentinel.php",
                    "Module.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Colin Mollenhour",
                    "email": "colin@mollenhour.com"
                }
            ],
            "description": "Credis is a lightweight interface to the Redis key-value store which wraps the phpredis library when available for better performance.",
            "homepage": "https://github.com/colinmollenhour/credis",
            "support": {
                "issues": "https://github.com/colinmollenhour/credis/issues",
                "source": "https://github.com/colinmollenhour/credis/tree/v1.17.0"
            },
            "time": "2025-02-10T18:58:46+00:00"
        },
        {
            "name": "colinmollenhour/php-redis-session-abstract",
            "version": "v1.7.0",
            "source": {
                "type": "git",
                "url": "https://github.com/colinmollenhour/php-redis-session-abstract.git",
                "reference": "5d93866cd53701ef8f866cb41cb5c6d7259d4416"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/colinmollenhour/php-redis-session-abstract/zipball/5d93866cd53701ef8f866cb41cb5c6d7259d4416",
                "reference": "5d93866cd53701ef8f866cb41cb5c6d7259d4416",
                "shasum": ""
            },
            "require": {
                "colinmollenhour/credis": "~1.6",
                "php": "^5.5 || ^7.0 || ^8.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^9"
            },
            "type": "library",
            "autoload": {
                "psr-0": {
                    "Cm\\RedisSession\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Colin Mollenhour"
                }
            ],
            "description": "A Redis-based session handler with optimistic locking",
            "homepage": "https://github.com/colinmollenhour/php-redis-session-abstract",
            "support": {
                "issues": "https://github.com/colinmollenhour/php-redis-session-abstract/issues",
                "source": "https://github.com/colinmollenhour/php-redis-session-abstract/tree/v1.7.0"
            },
            "time": "2024-02-03T06:04:45+00:00"
        },
        {
            "name": "cweagans/composer-patches",
            "version": "1.7.3",
            "source": {
                "type": "git",
                "url": "https://github.com/cweagans/composer-patches.git",
                "reference": "e190d4466fe2b103a55467dfa83fc2fecfcaf2db"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/cweagans/composer-patches/zipball/e190d4466fe2b103a55467dfa83fc2fecfcaf2db",
                "reference": "e190d4466fe2b103a55467dfa83fc2fecfcaf2db",
                "shasum": ""
            },
            "require": {
                "composer-plugin-api": "^1.0 || ^2.0",
                "php": ">=5.3.0"
            },
            "require-dev": {
                "composer/composer": "~1.0 || ~2.0",
                "phpunit/phpunit": "~4.6"
            },
            "type": "composer-plugin",
            "extra": {
                "class": "cweagans\\Composer\\Patches"
            },
            "autoload": {
                "psr-4": {
                    "cweagans\\Composer\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Cameron Eagans",
                    "email": "me@cweagans.net"
                }
            ],
            "description": "Provides a way to patch Composer packages.",
            "support": {
                "issues": "https://github.com/cweagans/composer-patches/issues",
                "source": "https://github.com/cweagans/composer-patches/tree/1.7.3"
            },
            "time": "2022-12-20T22:53:13+00:00"
        },
        {
            "name": "doctrine/annotations",
            "version": "1.14.4",
            "source": {
                "type": "git",
                "url": "https://github.com/doctrine/annotations.git",
                "reference": "253dca476f70808a5aeed3a47cc2cc88c5cab915"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/doctrine/annotations/zipball/253dca476f70808a5aeed3a47cc2cc88c5cab915",
                "reference": "253dca476f70808a5aeed3a47cc2cc88c5cab915",
                "shasum": ""
            },
            "require": {
                "doctrine/lexer": "^1 || ^2",
                "ext-tokenizer": "*",
                "php": "^7.1 || ^8.0",
                "psr/cache": "^1 || ^2 || ^3"
            },
            "require-dev": {
                "doctrine/cache": "^1.11 || ^2.0",
                "doctrine/coding-standard": "^9 || ^12",
                "phpstan/phpstan": "~1.4.10 || ^1.10.28",
                "phpunit/phpunit": "^7.5 || ^8.5 || ^9.5",
                "symfony/cache": "^4.4 || ^5.4 || ^6.4 || ^7",
                "vimeo/psalm": "^4.30 || ^5.14"
            },
            "suggest": {
                "php": "PHP 8.0 or higher comes with attributes, a native replacement for annotations"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Doctrine\\Common\\Annotations\\": "lib/Doctrine/Common/Annotations"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Guilherme Blanco",
                    "email": "guilhermeblanco@gmail.com"
                },
                {
                    "name": "Roman Borschel",
                    "email": "roman@code-factory.org"
                },
                {
                    "name": "Benjamin Eberlei",
                    "email": "kontakt@beberlei.de"
                },
                {
                    "name": "Jonathan Wage",
                    "email": "jonwage@gmail.com"
                },
                {
                    "name": "Johannes Schmitt",
                    "email": "schmittjoh@gmail.com"
                }
            ],
            "description": "Docblock Annotations Parser",
            "homepage": "https://www.doctrine-project.org/projects/annotations.html",
            "keywords": [
                "annotations",
                "docblock",
                "parser"
            ],
            "support": {
                "issues": "https://github.com/doctrine/annotations/issues",
                "source": "https://github.com/doctrine/annotations/tree/1.14.4"
            },
            "time": "2024-09-05T10:15:52+00:00"
        },
        {
            "name": "doctrine/deprecations",
            "version": "1.1.5",
            "source": {
                "type": "git",
                "url": "https://github.com/doctrine/deprecations.git",
                "reference": "459c2f5dd3d6a4633d3b5f46ee2b1c40f57d3f38"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/doctrine/deprecations/zipball/459c2f5dd3d6a4633d3b5f46ee2b1c40f57d3f38",
                "reference": "459c2f5dd3d6a4633d3b5f46ee2b1c40f57d3f38",
                "shasum": ""
            },
            "require": {
                "php": "^7.1 || ^8.0"
            },
            "conflict": {
                "phpunit/phpunit": "<=7.5 || >=13"
            },
            "require-dev": {
                "doctrine/coding-standard": "^9 || ^12 || ^13",
                "phpstan/phpstan": "1.4.10 || 2.1.11",
                "phpstan/phpstan-phpunit": "^1.0 || ^2",
                "phpunit/phpunit": "^7.5 || ^8.5 || ^9.6 || ^10.5 || ^11.5 || ^12",
                "psr/log": "^1 || ^2 || ^3"
            },
            "suggest": {
                "psr/log": "Allows logging deprecations via PSR-3 logger implementation"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Doctrine\\Deprecations\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "A small layer on top of trigger_error(E_USER_DEPRECATED) or PSR-3 logging with options to disable all deprecations or selectively for packages.",
            "homepage": "https://www.doctrine-project.org/",
            "support": {
                "issues": "https://github.com/doctrine/deprecations/issues",
                "source": "https://github.com/doctrine/deprecations/tree/1.1.5"
            },
            "time": "2025-04-07T20:06:18+00:00"
        },
        {
            "name": "doctrine/lexer",
            "version": "2.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/doctrine/lexer.git",
                "reference": "861c870e8b75f7c8f69c146c7f89cc1c0f1b49b6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/doctrine/lexer/zipball/861c870e8b75f7c8f69c146c7f89cc1c0f1b49b6",
                "reference": "861c870e8b75f7c8f69c146c7f89cc1c0f1b49b6",
                "shasum": ""
            },
            "require": {
                "doctrine/deprecations": "^1.0",
                "php": "^7.1 || ^8.0"
            },
            "require-dev": {
                "doctrine/coding-standard": "^9 || ^12",
                "phpstan/phpstan": "^1.3",
                "phpunit/phpunit": "^7.5 || ^8.5 || ^9.6",
                "psalm/plugin-phpunit": "^0.18.3",
                "vimeo/psalm": "^4.11 || ^5.21"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Doctrine\\Common\\Lexer\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Guilherme Blanco",
                    "email": "guilhermeblanco@gmail.com"
                },
                {
                    "name": "Roman Borschel",
                    "email": "roman@code-factory.org"
                },
                {
                    "name": "Johannes Schmitt",
                    "email": "schmittjoh@gmail.com"
                }
            ],
            "description": "PHP Doctrine Lexer parser library that can be used in Top-Down, Recursive Descent Parsers.",
            "homepage": "https://www.doctrine-project.org/projects/lexer.html",
            "keywords": [
                "annotations",
                "docblock",
                "lexer",
                "parser",
                "php"
            ],
            "support": {
                "issues": "https://github.com/doctrine/lexer/issues",
                "source": "https://github.com/doctrine/lexer/tree/2.1.1"
            },
            "funding": [
                {
                    "url": "https://www.doctrine-project.org/sponsorship.html",
                    "type": "custom"
                },
                {
                    "url": "https://www.patreon.com/phpdoctrine",
                    "type": "patreon"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/doctrine%2Flexer",
                    "type": "tidelift"
                }
            ],
            "time": "2024-02-05T11:35:39+00:00"
        },
        {
            "name": "elasticsearch/elasticsearch",
            "version": "v7.17.2",
            "source": {
                "type": "git",
                "url": "https://github.com/elastic/elasticsearch-php.git",
                "reference": "2d302233f2bb0926812d82823bb820d405e130fc"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/elastic/elasticsearch-php/zipball/2d302233f2bb0926812d82823bb820d405e130fc",
                "reference": "2d302233f2bb0926812d82823bb820d405e130fc",
                "shasum": ""
            },
            "require": {
                "ext-json": ">=1.3.7",
                "ezimuel/ringphp": "^1.1.2",
                "php": "^7.3 || ^8.0",
                "psr/log": "^1|^2|^3"
            },
            "require-dev": {
                "ext-yaml": "*",
                "ext-zip": "*",
                "mockery/mockery": "^1.2",
                "phpstan/phpstan": "^1.10",
                "phpunit/phpunit": "^9.3",
                "squizlabs/php_codesniffer": "^3.4",
                "symfony/finder": "~4.0"
            },
            "suggest": {
                "ext-curl": "*",
                "monolog/monolog": "Allows for client-level logging and tracing"
            },
            "type": "library",
            "autoload": {
                "files": [
                    "src/autoload.php"
                ],
                "psr-4": {
                    "Elasticsearch\\": "src/Elasticsearch/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "Apache-2.0",
                "LGPL-2.1-only"
            ],
            "authors": [
                {
                    "name": "Zachary Tong"
                },
                {
                    "name": "Enrico Zimuel"
                }
            ],
            "description": "PHP Client for Elasticsearch",
            "keywords": [
                "client",
                "elasticsearch",
                "search"
            ],
            "support": {
                "issues": "https://github.com/elastic/elasticsearch-php/issues",
                "source": "https://github.com/elastic/elasticsearch-php/tree/v7.17.2"
            },
            "time": "2023-04-21T15:31:12+00:00"
        },
        {
            "name": "ezimuel/guzzlestreams",
            "version": "3.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/ezimuel/guzzlestreams.git",
                "reference": "b4b5a025dfee70d6cd34c780e07330eb93d5b997"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/ezimuel/guzzlestreams/zipball/b4b5a025dfee70d6cd34c780e07330eb93d5b997",
                "reference": "b4b5a025dfee70d6cd34c780e07330eb93d5b997",
                "shasum": ""
            },
            "require": {
                "php": ">=5.4.0"
            },
            "require-dev": {
                "phpunit/phpunit": "~9.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "GuzzleHttp\\Stream\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Michael Dowling",
                    "email": "mtdowling@gmail.com",
                    "homepage": "https://github.com/mtdowling"
                }
            ],
            "description": "Fork of guzzle/streams (abandoned) to be used with elasticsearch-php",
            "homepage": "http://guzzlephp.org/",
            "keywords": [
                "Guzzle",
                "stream"
            ],
            "support": {
                "source": "https://github.com/ezimuel/guzzlestreams/tree/3.1.0"
            },
            "time": "2022-10-24T12:58:50+00:00"
        },
        {
            "name": "ezimuel/ringphp",
            "version": "1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/ezimuel/ringphp.git",
                "reference": "5e4ee1dfc7a323b87873b83f17c69c76ba047793"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/ezimuel/ringphp/zipball/5e4ee1dfc7a323b87873b83f17c69c76ba047793",
                "reference": "5e4ee1dfc7a323b87873b83f17c69c76ba047793",
                "shasum": ""
            },
            "require": {
                "ezimuel/guzzlestreams": "^3.0.1",
                "php": ">=5.4.0",
                "react/promise": "^2.0 || ^3.0"
            },
            "replace": {
                "guzzlehttp/ringphp": "self.version"
            },
            "require-dev": {
                "ext-curl": "*",
                "phpunit/phpunit": "~9.0"
            },
            "suggest": {
                "ext-curl": "Guzzle will use specific adapters if cURL is present"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.1-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "GuzzleHttp\\Ring\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Michael Dowling",
                    "email": "mtdowling@gmail.com",
                    "homepage": "https://github.com/mtdowling"
                }
            ],
            "description": "Fork of guzzle/RingPHP (abandoned) to be used with elasticsearch-php",
            "support": {
                "source": "https://github.com/ezimuel/ringphp/tree/1.3.0"
            },
            "time": "2025-02-24T10:29:27+00:00"
        },
        {
            "name": "giggsey/libphonenumber-for-php",
            "version": "8.13.55",
            "source": {
                "type": "git",
                "url": "https://github.com/giggsey/libphonenumber-for-php.git",
                "reference": "6e28b3d53cf96d7f41c83d9b80b6021ecbd00537"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/giggsey/libphonenumber-for-php/zipball/6e28b3d53cf96d7f41c83d9b80b6021ecbd00537",
                "reference": "6e28b3d53cf96d7f41c83d9b80b6021ecbd00537",
                "shasum": ""
            },
            "require": {
                "giggsey/locale": "^2.0",
                "php": "^7.4|^8.0",
                "symfony/polyfill-mbstring": "^1.17"
            },
            "replace": {
                "giggsey/libphonenumber-for-php-lite": "self.version"
            },
            "require-dev": {
                "friendsofphp/php-cs-fixer": "^3.64",
                "pear/pear-core-minimal": "^1.10",
                "pear/pear_exception": "^1.0",
                "pear/versioncontrol_git": "^0.7",
                "phing/phing": "^3.0",
                "php-coveralls/php-coveralls": "^2.0",
                "phpunit/phpunit": "^9.6",
                "symfony/console": "^v5.2",
                "symfony/var-exporter": "^5.2"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "8.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "libphonenumber\\": "src/"
                },
                "exclude-from-classmap": [
                    "/src/data/",
                    "/src/carrier/data/",
                    "/src/geocoding/data/",
                    "/src/timezone/data/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "Apache-2.0"
            ],
            "authors": [
                {
                    "name": "Joshua Gigg",
                    "email": "giggsey@gmail.com",
                    "homepage": "https://giggsey.com/"
                }
            ],
            "description": "PHP Port of Google's libphonenumber",
            "homepage": "https://github.com/giggsey/libphonenumber-for-php",
            "keywords": [
                "geocoding",
                "geolocation",
                "libphonenumber",
                "mobile",
                "phonenumber",
                "validation"
            ],
            "support": {
                "issues": "https://github.com/giggsey/libphonenumber-for-php/issues",
                "source": "https://github.com/giggsey/libphonenumber-for-php"
            },
            "time": "2025-02-14T08:14:08+00:00"
        },
        {
            "name": "giggsey/locale",
            "version": "2.8.0",
            "source": {
                "type": "git",
                "url": "https://github.com/giggsey/Locale.git",
                "reference": "1cd8b3ad2d43e04f4c2c6a240495af44780f809b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/giggsey/Locale/zipball/1cd8b3ad2d43e04f4c2c6a240495af44780f809b",
                "reference": "1cd8b3ad2d43e04f4c2c6a240495af44780f809b",
                "shasum": ""
            },
            "require": {
                "php": "^8.1"
            },
            "require-dev": {
                "ext-json": "*",
                "friendsofphp/php-cs-fixer": "^3.66",
                "pear/pear-core-minimal": "^1.10",
                "pear/pear_exception": "^1.0",
                "pear/versioncontrol_git": "^0.5",
                "phing/phing": "^2.17.4",
                "php-coveralls/php-coveralls": "^2.7",
                "phpunit/phpunit": "^10.5.45",
                "symfony/console": "^6.4",
                "symfony/filesystem": "6.4",
                "symfony/finder": "^6.4",
                "symfony/process": "^6.4",
                "symfony/var-exporter": "^6.4"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Giggsey\\Locale\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Joshua Gigg",
                    "email": "giggsey@gmail.com",
                    "homepage": "https://giggsey.com/"
                }
            ],
            "description": "Locale functions required by libphonenumber-for-php",
            "support": {
                "issues": "https://github.com/giggsey/Locale/issues",
                "source": "https://github.com/giggsey/Locale/tree/2.8.0"
            },
            "time": "2025-03-20T14:25:27+00:00"
        },
        {
            "name": "guzzlehttp/guzzle",
            "version": "7.9.3",
            "source": {
                "type": "git",
                "url": "https://github.com/guzzle/guzzle.git",
                "reference": "7b2f29fe81dc4da0ca0ea7d42107a0845946ea77"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/guzzle/guzzle/zipball/7b2f29fe81dc4da0ca0ea7d42107a0845946ea77",
                "reference": "7b2f29fe81dc4da0ca0ea7d42107a0845946ea77",
                "shasum": ""
            },
            "require": {
                "ext-json": "*",
                "guzzlehttp/promises": "^1.5.3 || ^2.0.3",
                "guzzlehttp/psr7": "^2.7.0",
                "php": "^7.2.5 || ^8.0",
                "psr/http-client": "^1.0",
                "symfony/deprecation-contracts": "^2.2 || ^3.0"
            },
            "provide": {
                "psr/http-client-implementation": "1.0"
            },
            "require-dev": {
                "bamarni/composer-bin-plugin": "^1.8.2",
                "ext-curl": "*",
                "guzzle/client-integration-tests": "3.0.2",
                "php-http/message-factory": "^1.1",
                "phpunit/phpunit": "^8.5.39 || ^9.6.20",
                "psr/log": "^1.1 || ^2.0 || ^3.0"
            },
            "suggest": {
                "ext-curl": "Required for CURL handler support",
                "ext-intl": "Required for Internationalized Domain Name (IDN) support",
                "psr/log": "Required for using the Log middleware"
            },
            "type": "library",
            "extra": {
                "bamarni-bin": {
                    "bin-links": true,
                    "forward-command": false
                }
            },
            "autoload": {
                "files": [
                    "src/functions_include.php"
                ],
                "psr-4": {
                    "GuzzleHttp\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Graham Campbell",
                    "email": "hello@gjcampbell.co.uk",
                    "homepage": "https://github.com/GrahamCampbell"
                },
                {
                    "name": "Michael Dowling",
                    "email": "mtdowling@gmail.com",
                    "homepage": "https://github.com/mtdowling"
                },
                {
                    "name": "Jeremy Lindblom",
                    "email": "jeremeamia@gmail.com",
                    "homepage": "https://github.com/jeremeamia"
                },
                {
                    "name": "George Mponos",
                    "email": "gmponos@gmail.com",
                    "homepage": "https://github.com/gmponos"
                },
                {
                    "name": "Tobias Nyholm",
                    "email": "tobias.nyholm@gmail.com",
                    "homepage": "https://github.com/Nyholm"
                },
                {
                    "name": "Márk Sági-Kazár",
                    "email": "mark.sagikazar@gmail.com",
                    "homepage": "https://github.com/sagikazarmark"
                },
                {
                    "name": "Tobias Schultze",
                    "email": "webmaster@tubo-world.de",
                    "homepage": "https://github.com/Tobion"
                }
            ],
            "description": "Guzzle is a PHP HTTP client library",
            "keywords": [
                "client",
                "curl",
                "framework",
                "http",
                "http client",
                "psr-18",
                "psr-7",
                "rest",
                "web service"
            ],
            "support": {
                "issues": "https://github.com/guzzle/guzzle/issues",
                "source": "https://github.com/guzzle/guzzle/tree/7.9.3"
            },
            "funding": [
                {
                    "url": "https://github.com/GrahamCampbell",
                    "type": "github"
                },
                {
                    "url": "https://github.com/Nyholm",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/guzzle",
                    "type": "tidelift"
                }
            ],
            "time": "2025-03-27T13:37:11+00:00"
        },
        {
            "name": "guzzlehttp/promises",
            "version": "2.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/guzzle/promises.git",
                "reference": "7c69f28996b0a6920945dd20b3857e499d9ca96c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/guzzle/promises/zipball/7c69f28996b0a6920945dd20b3857e499d9ca96c",
                "reference": "7c69f28996b0a6920945dd20b3857e499d9ca96c",
                "shasum": ""
            },
            "require": {
                "php": "^7.2.5 || ^8.0"
            },
            "require-dev": {
                "bamarni/composer-bin-plugin": "^1.8.2",
                "phpunit/phpunit": "^8.5.39 || ^9.6.20"
            },
            "type": "library",
            "extra": {
                "bamarni-bin": {
                    "bin-links": true,
                    "forward-command": false
                }
            },
            "autoload": {
                "psr-4": {
                    "GuzzleHttp\\Promise\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Graham Campbell",
                    "email": "hello@gjcampbell.co.uk",
                    "homepage": "https://github.com/GrahamCampbell"
                },
                {
                    "name": "Michael Dowling",
                    "email": "mtdowling@gmail.com",
                    "homepage": "https://github.com/mtdowling"
                },
                {
                    "name": "Tobias Nyholm",
                    "email": "tobias.nyholm@gmail.com",
                    "homepage": "https://github.com/Nyholm"
                },
                {
                    "name": "Tobias Schultze",
                    "email": "webmaster@tubo-world.de",
                    "homepage": "https://github.com/Tobion"
                }
            ],
            "description": "Guzzle promises library",
            "keywords": [
                "promise"
            ],
            "support": {
                "issues": "https://github.com/guzzle/promises/issues",
                "source": "https://github.com/guzzle/promises/tree/2.2.0"
            },
            "funding": [
                {
                    "url": "https://github.com/GrahamCampbell",
                    "type": "github"
                },
                {
                    "url": "https://github.com/Nyholm",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/promises",
                    "type": "tidelift"
                }
            ],
            "time": "2025-03-27T13:27:01+00:00"
        },
        {
            "name": "guzzlehttp/psr7",
            "version": "2.7.1",
            "source": {
                "type": "git",
                "url": "https://github.com/guzzle/psr7.git",
                "reference": "c2270caaabe631b3b44c85f99e5a04bbb8060d16"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/guzzle/psr7/zipball/c2270caaabe631b3b44c85f99e5a04bbb8060d16",
                "reference": "c2270caaabe631b3b44c85f99e5a04bbb8060d16",
                "shasum": ""
            },
            "require": {
                "php": "^7.2.5 || ^8.0",
                "psr/http-factory": "^1.0",
                "psr/http-message": "^1.1 || ^2.0",
                "ralouphie/getallheaders": "^3.0"
            },
            "provide": {
                "psr/http-factory-implementation": "1.0",
                "psr/http-message-implementation": "1.0"
            },
            "require-dev": {
                "bamarni/composer-bin-plugin": "^1.8.2",
                "http-interop/http-factory-tests": "0.9.0",
                "phpunit/phpunit": "^8.5.39 || ^9.6.20"
            },
            "suggest": {
                "laminas/laminas-httphandlerrunner": "Emit PSR-7 responses"
            },
            "type": "library",
            "extra": {
                "bamarni-bin": {
                    "bin-links": true,
                    "forward-command": false
                }
            },
            "autoload": {
                "psr-4": {
                    "GuzzleHttp\\Psr7\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Graham Campbell",
                    "email": "hello@gjcampbell.co.uk",
                    "homepage": "https://github.com/GrahamCampbell"
                },
                {
                    "name": "Michael Dowling",
                    "email": "mtdowling@gmail.com",
                    "homepage": "https://github.com/mtdowling"
                },
                {
                    "name": "George Mponos",
                    "email": "gmponos@gmail.com",
                    "homepage": "https://github.com/gmponos"
                },
                {
                    "name": "Tobias Nyholm",
                    "email": "tobias.nyholm@gmail.com",
                    "homepage": "https://github.com/Nyholm"
                },
                {
                    "name": "Márk Sági-Kazár",
                    "email": "mark.sagikazar@gmail.com",
                    "homepage": "https://github.com/sagikazarmark"
                },
                {
                    "name": "Tobias Schultze",
                    "email": "webmaster@tubo-world.de",
                    "homepage": "https://github.com/Tobion"
                },
                {
                    "name": "Márk Sági-Kazár",
                    "email": "mark.sagikazar@gmail.com",
                    "homepage": "https://sagikazarmark.hu"
                }
            ],
            "description": "PSR-7 message implementation that also provides common utility methods",
            "keywords": [
                "http",
                "message",
                "psr-7",
                "request",
                "response",
                "stream",
                "uri",
                "url"
            ],
            "support": {
                "issues": "https://github.com/guzzle/psr7/issues",
                "source": "https://github.com/guzzle/psr7/tree/2.7.1"
            },
            "funding": [
                {
                    "url": "https://github.com/GrahamCampbell",
                    "type": "github"
                },
                {
                    "url": "https://github.com/Nyholm",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/guzzlehttp/psr7",
                    "type": "tidelift"
                }
            ],
            "time": "2025-03-27T12:30:47+00:00"
        },
        {
            "name": "influxdb/influxdb-php",
            "version": "1.15.2",
            "source": {
                "type": "git",
                "url": "https://github.com/influxdata/influxdb-php.git",
                "reference": "d6e59f4f04ab9107574fda69c2cbe36671253d03"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/influxdata/influxdb-php/zipball/d6e59f4f04ab9107574fda69c2cbe36671253d03",
                "reference": "d6e59f4f04ab9107574fda69c2cbe36671253d03",
                "shasum": ""
            },
            "require": {
                "guzzlehttp/guzzle": "^6.0|^7.0",
                "php": "^5.5 || ^7.0 || ^8.0"
            },
            "require-dev": {
                "dms/phpunit-arraysubset-asserts": "^0.2.1",
                "phpunit/phpunit": "^9.5"
            },
            "suggest": {
                "ext-curl": "Curl extension, needed for Curl driver",
                "stefanotorresi/influxdb-php-async": "An asyncronous client for InfluxDB, implemented via ReactPHP."
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "InfluxDB\\": "src/InfluxDB"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Stephen Hoogendijk",
                    "email": "stephen@tca0.nl"
                },
                {
                    "name": "Daniel Martinez",
                    "email": "danimartcas@hotmail.com"
                },
                {
                    "name": "Gianluca Arbezzano",
                    "email": "gianarb92@gmail.com"
                }
            ],
            "description": "InfluxDB client library for PHP",
            "keywords": [
                "client",
                "influxdata",
                "influxdb",
                "influxdb class",
                "influxdb client",
                "influxdb library",
                "time series"
            ],
            "support": {
                "issues": "https://github.com/influxdata/influxdb-php/issues",
                "source": "https://github.com/influxdata/influxdb-php/tree/1.15.2"
            },
            "abandoned": true,
            "time": "2020-12-26T17:45:17+00:00"
        },
        {
            "name": "jean85/pretty-package-versions",
            "version": "2.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/Jean85/pretty-package-versions.git",
                "reference": "4d7aa5dab42e2a76d99559706022885de0e18e1a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Jean85/pretty-package-versions/zipball/4d7aa5dab42e2a76d99559706022885de0e18e1a",
                "reference": "4d7aa5dab42e2a76d99559706022885de0e18e1a",
                "shasum": ""
            },
            "require": {
                "composer-runtime-api": "^2.1.0",
                "php": "^7.4|^8.0"
            },
            "require-dev": {
                "friendsofphp/php-cs-fixer": "^3.2",
                "jean85/composer-provided-replaced-stub-package": "^1.0",
                "phpstan/phpstan": "^2.0",
                "phpunit/phpunit": "^7.5|^8.5|^9.6",
                "rector/rector": "^2.0",
                "vimeo/psalm": "^4.3 || ^5.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Jean85\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Alessandro Lai",
                    "email": "alessandro.lai85@gmail.com"
                }
            ],
            "description": "A library to get pretty versions strings of installed dependencies",
            "keywords": [
                "composer",
                "package",
                "release",
                "versions"
            ],
            "support": {
                "issues": "https://github.com/Jean85/pretty-package-versions/issues",
                "source": "https://github.com/Jean85/pretty-package-versions/tree/2.1.1"
            },
            "time": "2025-03-19T14:43:43+00:00"
        },
        {
            "name": "mongodb/mongodb",
            "version": "1.15.0",
            "source": {
                "type": "git",
                "url": "https://github.com/mongodb/mongo-php-library.git",
                "reference": "3a681a3b2f2c0ebac227a3b86bb9057d0e6eb8f8"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/mongodb/mongo-php-library/zipball/3a681a3b2f2c0ebac227a3b86bb9057d0e6eb8f8",
                "reference": "3a681a3b2f2c0ebac227a3b86bb9057d0e6eb8f8",
                "shasum": ""
            },
            "require": {
                "ext-hash": "*",
                "ext-json": "*",
                "ext-mongodb": "^1.15.0",
                "jean85/pretty-package-versions": "^1.2 || ^2.0.1",
                "php": "^7.2 || ^8.0",
                "symfony/polyfill-php80": "^1.19"
            },
            "require-dev": {
                "doctrine/coding-standard": "^9.0",
                "squizlabs/php_codesniffer": "^3.6",
                "symfony/phpunit-bridge": "^5.2",
                "vimeo/psalm": "^4.28"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.15.x-dev"
                }
            },
            "autoload": {
                "files": [
                    "src/functions.php"
                ],
                "psr-4": {
                    "MongoDB\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "Apache-2.0"
            ],
            "authors": [
                {
                    "name": "Andreas Braun",
                    "email": "andreas.braun@mongodb.com"
                },
                {
                    "name": "Jeremy Mikola",
                    "email": "jmikola@gmail.com"
                }
            ],
            "description": "MongoDB driver library",
            "homepage": "https://jira.mongodb.org/browse/PHPLIB",
            "keywords": [
                "database",
                "driver",
                "mongodb",
                "persistence"
            ],
            "support": {
                "issues": "https://github.com/mongodb/mongo-php-library/issues",
                "source": "https://github.com/mongodb/mongo-php-library/tree/1.15.0"
            },
            "time": "2022-11-23T04:45:35+00:00"
        },
        {
            "name": "mpdf/mpdf",
            "version": "v8.2.5",
            "source": {
                "type": "git",
                "url": "https://github.com/mpdf/mpdf.git",
                "reference": "e175b05e3e00977b85feb96a8cccb174ac63621f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/mpdf/mpdf/zipball/e175b05e3e00977b85feb96a8cccb174ac63621f",
                "reference": "e175b05e3e00977b85feb96a8cccb174ac63621f",
                "shasum": ""
            },
            "require": {
                "ext-gd": "*",
                "ext-mbstring": "*",
                "mpdf/psr-http-message-shim": "^1.0 || ^2.0",
                "mpdf/psr-log-aware-trait": "^2.0 || ^3.0",
                "myclabs/deep-copy": "^1.7",
                "paragonie/random_compat": "^1.4|^2.0|^9.99.99",
                "php": "^5.6 || ^7.0 || ~8.0.0 || ~8.1.0 || ~8.2.0 || ~8.3.0 || ~8.4.0",
                "psr/http-message": "^1.0 || ^2.0",
                "psr/log": "^1.0 || ^2.0 || ^3.0",
                "setasign/fpdi": "^2.1"
            },
            "require-dev": {
                "mockery/mockery": "^1.3.0",
                "mpdf/qrcode": "^1.1.0",
                "squizlabs/php_codesniffer": "^3.5.0",
                "tracy/tracy": "~2.5",
                "yoast/phpunit-polyfills": "^1.0"
            },
            "suggest": {
                "ext-bcmath": "Needed for generation of some types of barcodes",
                "ext-xml": "Needed mainly for SVG manipulation",
                "ext-zlib": "Needed for compression of embedded resources, such as fonts"
            },
            "type": "library",
            "autoload": {
                "files": [
                    "src/functions.php"
                ],
                "psr-4": {
                    "Mpdf\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "GPL-2.0-only"
            ],
            "authors": [
                {
                    "name": "Matěj Humpál",
                    "role": "Developer, maintainer"
                },
                {
                    "name": "Ian Back",
                    "role": "Developer (retired)"
                }
            ],
            "description": "PHP library generating PDF files from UTF-8 encoded HTML",
            "homepage": "https://mpdf.github.io",
            "keywords": [
                "pdf",
                "php",
                "utf-8"
            ],
            "support": {
                "docs": "https://mpdf.github.io",
                "issues": "https://github.com/mpdf/mpdf/issues",
                "source": "https://github.com/mpdf/mpdf"
            },
            "funding": [
                {
                    "url": "https://www.paypal.me/mpdf",
                    "type": "custom"
                }
            ],
            "time": "2024-11-18T15:30:42+00:00"
        },
        {
            "name": "mpdf/psr-http-message-shim",
            "version": "v2.0.1",
            "source": {
                "type": "git",
                "url": "https://github.com/mpdf/psr-http-message-shim.git",
                "reference": "f25a0153d645e234f9db42e5433b16d9b113920f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/mpdf/psr-http-message-shim/zipball/f25a0153d645e234f9db42e5433b16d9b113920f",
                "reference": "f25a0153d645e234f9db42e5433b16d9b113920f",
                "shasum": ""
            },
            "require": {
                "psr/http-message": "^2.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Mpdf\\PsrHttpMessageShim\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Mark Dorison",
                    "email": "mark@chromatichq.com"
                },
                {
                    "name": "Kristofer Widholm",
                    "email": "kristofer@chromatichq.com"
                },
                {
                    "name": "Nigel Cunningham",
                    "email": "nigel.cunningham@technocrat.com.au"
                }
            ],
            "description": "Shim to allow support of different psr/message versions.",
            "support": {
                "issues": "https://github.com/mpdf/psr-http-message-shim/issues",
                "source": "https://github.com/mpdf/psr-http-message-shim/tree/v2.0.1"
            },
            "time": "2023-10-02T14:34:03+00:00"
        },
        {
            "name": "mpdf/psr-log-aware-trait",
            "version": "v2.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/mpdf/psr-log-aware-trait.git",
                "reference": "7a077416e8f39eb626dee4246e0af99dd9ace275"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/mpdf/psr-log-aware-trait/zipball/7a077416e8f39eb626dee4246e0af99dd9ace275",
                "reference": "7a077416e8f39eb626dee4246e0af99dd9ace275",
                "shasum": ""
            },
            "require": {
                "psr/log": "^1.0 || ^2.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Mpdf\\PsrLogAwareTrait\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Mark Dorison",
                    "email": "mark@chromatichq.com"
                },
                {
                    "name": "Kristofer Widholm",
                    "email": "kristofer@chromatichq.com"
                }
            ],
            "description": "Trait to allow support of different psr/log versions.",
            "support": {
                "issues": "https://github.com/mpdf/psr-log-aware-trait/issues",
                "source": "https://github.com/mpdf/psr-log-aware-trait/tree/v2.0.0"
            },
            "time": "2023-05-03T06:18:28+00:00"
        },
        {
            "name": "myclabs/deep-copy",
            "version": "1.13.1",
            "source": {
                "type": "git",
                "url": "https://github.com/myclabs/DeepCopy.git",
                "reference": "1720ddd719e16cf0db4eb1c6eca108031636d46c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/myclabs/DeepCopy/zipball/1720ddd719e16cf0db4eb1c6eca108031636d46c",
                "reference": "1720ddd719e16cf0db4eb1c6eca108031636d46c",
                "shasum": ""
            },
            "require": {
                "php": "^7.1 || ^8.0"
            },
            "conflict": {
                "doctrine/collections": "<1.6.8",
                "doctrine/common": "<2.13.3 || >=3 <3.2.2"
            },
            "require-dev": {
                "doctrine/collections": "^1.6.8",
                "doctrine/common": "^2.13.3 || ^3.2.2",
                "phpspec/prophecy": "^1.10",
                "phpunit/phpunit": "^7.5.20 || ^8.5.23 || ^9.5.13"
            },
            "type": "library",
            "autoload": {
                "files": [
                    "src/DeepCopy/deep_copy.php"
                ],
                "psr-4": {
                    "DeepCopy\\": "src/DeepCopy/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Create deep copies (clones) of your objects",
            "keywords": [
                "clone",
                "copy",
                "duplicate",
                "object",
                "object graph"
            ],
            "support": {
                "issues": "https://github.com/myclabs/DeepCopy/issues",
                "source": "https://github.com/myclabs/DeepCopy/tree/1.13.1"
            },
            "funding": [
                {
                    "url": "https://tidelift.com/funding/github/packagist/myclabs/deep-copy",
                    "type": "tidelift"
                }
            ],
            "time": "2025-04-29T12:36:36+00:00"
        },
        {
            "name": "nesbot/carbon",
            "version": "2.73.0",
            "source": {
                "type": "git",
                "url": "https://github.com/CarbonPHP/carbon.git",
                "reference": "9228ce90e1035ff2f0db84b40ec2e023ed802075"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/CarbonPHP/carbon/zipball/9228ce90e1035ff2f0db84b40ec2e023ed802075",
                "reference": "9228ce90e1035ff2f0db84b40ec2e023ed802075",
                "shasum": ""
            },
            "require": {
                "carbonphp/carbon-doctrine-types": "*",
                "ext-json": "*",
                "php": "^7.1.8 || ^8.0",
                "psr/clock": "^1.0",
                "symfony/polyfill-mbstring": "^1.0",
                "symfony/polyfill-php80": "^1.16",
                "symfony/translation": "^3.4 || ^4.0 || ^5.0 || ^6.0"
            },
            "provide": {
                "psr/clock-implementation": "1.0"
            },
            "require-dev": {
                "doctrine/dbal": "^2.0 || ^3.1.4 || ^4.0",
                "doctrine/orm": "^2.7 || ^3.0",
                "friendsofphp/php-cs-fixer": "^3.0",
                "kylekatarnls/multi-tester": "^2.0",
                "ondrejmirtes/better-reflection": "<6",
                "phpmd/phpmd": "^2.9",
                "phpstan/extension-installer": "^1.0",
                "phpstan/phpstan": "^0.12.99 || ^1.7.14",
                "phpunit/php-file-iterator": "^2.0.5 || ^3.0.6",
                "phpunit/phpunit": "^7.5.20 || ^8.5.26 || ^9.5.20",
                "squizlabs/php_codesniffer": "^3.4"
            },
            "bin": [
                "bin/carbon"
            ],
            "type": "library",
            "extra": {
                "laravel": {
                    "providers": [
                        "Carbon\\Laravel\\ServiceProvider"
                    ]
                },
                "phpstan": {
                    "includes": [
                        "extension.neon"
                    ]
                },
                "branch-alias": {
                    "dev-2.x": "2.x-dev",
                    "dev-master": "3.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Carbon\\": "src/Carbon/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Brian Nesbitt",
                    "email": "brian@nesbot.com",
                    "homepage": "https://markido.com"
                },
                {
                    "name": "kylekatarnls",
                    "homepage": "https://github.com/kylekatarnls"
                }
            ],
            "description": "An API extension for DateTime that supports 281 different languages.",
            "homepage": "https://carbon.nesbot.com",
            "keywords": [
                "date",
                "datetime",
                "time"
            ],
            "support": {
                "docs": "https://carbon.nesbot.com/docs",
                "issues": "https://github.com/briannesbitt/Carbon/issues",
                "source": "https://github.com/briannesbitt/Carbon"
            },
            "funding": [
                {
                    "url": "https://github.com/sponsors/kylekatarnls",
                    "type": "github"
                },
                {
                    "url": "https://opencollective.com/Carbon#sponsor",
                    "type": "opencollective"
                },
                {
                    "url": "https://tidelift.com/subscription/pkg/packagist-nesbot-carbon?utm_source=packagist-nesbot-carbon&utm_medium=referral&utm_campaign=readme",
                    "type": "tidelift"
                }
            ],
            "time": "2025-01-08T20:10:23+00:00"
        },
        {
            "name": "opensearch-project/opensearch-php",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/opensearch-project/opensearch-php.git",
                "reference": "d54af5ff2167bee3eb68d02e210283314ef74712"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/opensearch-project/opensearch-php/zipball/d54af5ff2167bee3eb68d02e210283314ef74712",
                "reference": "d54af5ff2167bee3eb68d02e210283314ef74712",
                "shasum": ""
            },
            "require": {
                "ext-curl": "*",
                "ext-json": ">=1.3.7",
                "ezimuel/ringphp": "^1.1.2",
                "php": "^7.3 || ^8.0",
                "psr/log": "^1|^2"
            },
            "require-dev": {
                "ext-zip": "*",
                "friendsofphp/php-cs-fixer": "^3.0",
                "mockery/mockery": "^1.2",
                "phpstan/phpstan": "^0.12",
                "phpunit/phpunit": "^9.3",
                "symfony/finder": "~4.0"
            },
            "suggest": {
                "monolog/monolog": "Allows for client-level logging and tracing"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "OpenSearch\\": "src/OpenSearch/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "Apache-2.0",
                "LGPL-2.1-only"
            ],
            "authors": [
                {
                    "name": "Elastic"
                },
                {
                    "name": "OpenSearch Contributors"
                }
            ],
            "description": "PHP Client for OpenSearch",
            "keywords": [
                "client",
                "elasticsearch",
                "opensearch",
                "search"
            ],
            "support": {
                "issues": "https://github.com/opensearch-project/opensearch-php/issues",
                "source": "https://github.com/opensearch-project/opensearch-php/tree/1.0.2"
            },
            "time": "2022-02-08T08:37:31+00:00"
        },
        {
            "name": "opis/json-schema",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/opis/json-schema.git",
                "reference": "2b6a820a69e2e01870b25eec7d8ed61ebd7ad5a3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/opis/json-schema/zipball/2b6a820a69e2e01870b25eec7d8ed61ebd7ad5a3",
                "reference": "2b6a820a69e2e01870b25eec7d8ed61ebd7ad5a3",
                "shasum": ""
            },
            "require": {
                "php": ">=7.4"
            },
            "require-dev": {
                "ext-bcmath": "*",
                "ext-intl": "*",
                "ext-json": "*",
                "ext-mbstring": "*",
                "opis/string": "^2.0",
                "phpunit/phpunit": "^6.5 || ^7.0 || ^9.4"
            },
            "suggest": {
                "opis/string": "A standalone library for manipulating multibyte strings"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Opis\\JsonSchema\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "Apache-2.0"
            ],
            "authors": [
                {
                    "name": "Sorin Sarca",
                    "email": "sarca_sorin@hotmail.com"
                },
                {
                    "name": "Marius Sarca",
                    "email": "marius.sarca@gmail.com"
                }
            ],
            "description": "Json Schema Validator",
            "homepage": "http://www.opis.io/json-schema",
            "keywords": [
                "json",
                "schema",
                "validation",
                "validator"
            ],
            "support": {
                "issues": "https://github.com/opis/json-schema/issues",
                "source": "https://github.com/opis/json-schema/tree/1.2.0"
            },
            "time": "2025-03-05T20:03:36+00:00"
        },
        {
            "name": "paragonie/constant_time_encoding",
            "version": "v3.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/paragonie/constant_time_encoding.git",
                "reference": "df1e7fde177501eee2037dd159cf04f5f301a512"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/paragonie/constant_time_encoding/zipball/df1e7fde177501eee2037dd159cf04f5f301a512",
                "reference": "df1e7fde177501eee2037dd159cf04f5f301a512",
                "shasum": ""
            },
            "require": {
                "php": "^8"
            },
            "require-dev": {
                "phpunit/phpunit": "^9",
                "vimeo/psalm": "^4|^5"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "ParagonIE\\ConstantTime\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Paragon Initiative Enterprises",
                    "email": "security@paragonie.com",
                    "homepage": "https://paragonie.com",
                    "role": "Maintainer"
                },
                {
                    "name": "Steve 'Sc00bz' Thomas",
                    "email": "steve@tobtu.com",
                    "homepage": "https://www.tobtu.com",
                    "role": "Original Developer"
                }
            ],
            "description": "Constant-time Implementations of RFC 4648 Encoding (Base-64, Base-32, Base-16)",
            "keywords": [
                "base16",
                "base32",
                "base32_decode",
                "base32_encode",
                "base64",
                "base64_decode",
                "base64_encode",
                "bin2hex",
                "encoding",
                "hex",
                "hex2bin",
                "rfc4648"
            ],
            "support": {
                "email": "info@paragonie.com",
                "issues": "https://github.com/paragonie/constant_time_encoding/issues",
                "source": "https://github.com/paragonie/constant_time_encoding"
            },
            "time": "2024-05-08T12:36:18+00:00"
        },
        {
            "name": "paragonie/random_compat",
            "version": "v9.99.100",
            "source": {
                "type": "git",
                "url": "https://github.com/paragonie/random_compat.git",
                "reference": "996434e5492cb4c3edcb9168db6fbb1359ef965a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/paragonie/random_compat/zipball/996434e5492cb4c3edcb9168db6fbb1359ef965a",
                "reference": "996434e5492cb4c3edcb9168db6fbb1359ef965a",
                "shasum": ""
            },
            "require": {
                "php": ">= 7"
            },
            "require-dev": {
                "phpunit/phpunit": "4.*|5.*",
                "vimeo/psalm": "^1"
            },
            "suggest": {
                "ext-libsodium": "Provides a modern crypto API that can be used to generate random bytes."
            },
            "type": "library",
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Paragon Initiative Enterprises",
                    "email": "security@paragonie.com",
                    "homepage": "https://paragonie.com"
                }
            ],
            "description": "PHP 5.x polyfill for random_bytes() and random_int() from PHP 7",
            "keywords": [
                "csprng",
                "polyfill",
                "pseudorandom",
                "random"
            ],
            "support": {
                "email": "info@paragonie.com",
                "issues": "https://github.com/paragonie/random_compat/issues",
                "source": "https://github.com/paragonie/random_compat"
            },
            "time": "2020-10-15T08:29:30+00:00"
        },
        {
            "name": "paragonie/sodium_compat",
            "version": "v2.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/paragonie/sodium_compat.git",
                "reference": "a673d5f310477027cead2e2f2b6db5d8368157cb"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/paragonie/sodium_compat/zipball/a673d5f310477027cead2e2f2b6db5d8368157cb",
                "reference": "a673d5f310477027cead2e2f2b6db5d8368157cb",
                "shasum": ""
            },
            "require": {
                "php": "^8.1",
                "php-64bit": "*"
            },
            "require-dev": {
                "phpunit/phpunit": "^7|^8|^9",
                "vimeo/psalm": "^4|^5"
            },
            "suggest": {
                "ext-sodium": "Better performance, password hashing (Argon2i), secure memory management (memzero), and better security."
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "files": [
                    "autoload.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "ISC"
            ],
            "authors": [
                {
                    "name": "Paragon Initiative Enterprises",
                    "email": "security@paragonie.com"
                },
                {
                    "name": "Frank Denis",
                    "email": "jedisct1@pureftpd.org"
                }
            ],
            "description": "Pure PHP implementation of libsodium; uses the PHP extension if it exists",
            "keywords": [
                "Authentication",
                "BLAKE2b",
                "ChaCha20",
                "ChaCha20-Poly1305",
                "Chapoly",
                "Curve25519",
                "Ed25519",
                "EdDSA",
                "Edwards-curve Digital Signature Algorithm",
                "Elliptic Curve Diffie-Hellman",
                "Poly1305",
                "Pure-PHP cryptography",
                "RFC 7748",
                "RFC 8032",
                "Salpoly",
                "Salsa20",
                "X25519",
                "XChaCha20-Poly1305",
                "XSalsa20-Poly1305",
                "Xchacha20",
                "Xsalsa20",
                "aead",
                "cryptography",
                "ecdh",
                "elliptic curve",
                "elliptic curve cryptography",
                "encryption",
                "libsodium",
                "php",
                "public-key cryptography",
                "secret-key cryptography",
                "side-channel resistant"
            ],
            "support": {
                "issues": "https://github.com/paragonie/sodium_compat/issues",
                "source": "https://github.com/paragonie/sodium_compat/tree/v2.1.0"
            },
            "time": "2024-09-04T12:51:01+00:00"
        },
        {
            "name": "psr/cache",
            "version": "3.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/cache.git",
                "reference": "aa5030cfa5405eccfdcb1083ce040c2cb8d253bf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/cache/zipball/aa5030cfa5405eccfdcb1083ce040c2cb8d253bf",
                "reference": "aa5030cfa5405eccfdcb1083ce040c2cb8d253bf",
                "shasum": ""
            },
            "require": {
                "php": ">=8.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Psr\\Cache\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "PHP-FIG",
                    "homepage": "https://www.php-fig.org/"
                }
            ],
            "description": "Common interface for caching libraries",
            "keywords": [
                "cache",
                "psr",
                "psr-6"
            ],
            "support": {
                "source": "https://github.com/php-fig/cache/tree/3.0.0"
            },
            "time": "2021-02-03T23:26:27+00:00"
        },
        {
            "name": "psr/clock",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/clock.git",
                "reference": "e41a24703d4560fd0acb709162f73b8adfc3aa0d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/clock/zipball/e41a24703d4560fd0acb709162f73b8adfc3aa0d",
                "reference": "e41a24703d4560fd0acb709162f73b8adfc3aa0d",
                "shasum": ""
            },
            "require": {
                "php": "^7.0 || ^8.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Psr\\Clock\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "PHP-FIG",
                    "homepage": "https://www.php-fig.org/"
                }
            ],
            "description": "Common interface for reading the clock.",
            "homepage": "https://github.com/php-fig/clock",
            "keywords": [
                "clock",
                "now",
                "psr",
                "psr-20",
                "time"
            ],
            "support": {
                "issues": "https://github.com/php-fig/clock/issues",
                "source": "https://github.com/php-fig/clock/tree/1.0.0"
            },
            "time": "2022-11-25T14:36:26+00:00"
        },
        {
            "name": "psr/container",
            "version": "2.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/container.git",
                "reference": "c71ecc56dfe541dbd90c5360474fbc405f8d5963"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/container/zipball/c71ecc56dfe541dbd90c5360474fbc405f8d5963",
                "reference": "c71ecc56dfe541dbd90c5360474fbc405f8d5963",
                "shasum": ""
            },
            "require": {
                "php": ">=7.4.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Psr\\Container\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "PHP-FIG",
                    "homepage": "https://www.php-fig.org/"
                }
            ],
            "description": "Common Container Interface (PHP FIG PSR-11)",
            "homepage": "https://github.com/php-fig/container",
            "keywords": [
                "PSR-11",
                "container",
                "container-interface",
                "container-interop",
                "psr"
            ],
            "support": {
                "issues": "https://github.com/php-fig/container/issues",
                "source": "https://github.com/php-fig/container/tree/2.0.2"
            },
            "time": "2021-11-05T16:47:00+00:00"
        },
        {
            "name": "psr/event-dispatcher",
            "version": "1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/event-dispatcher.git",
                "reference": "dbefd12671e8a14ec7f180cab83036ed26714bb0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/event-dispatcher/zipball/dbefd12671e8a14ec7f180cab83036ed26714bb0",
                "reference": "dbefd12671e8a14ec7f180cab83036ed26714bb0",
                "shasum": ""
            },
            "require": {
                "php": ">=7.2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Psr\\EventDispatcher\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "PHP-FIG",
                    "homepage": "http://www.php-fig.org/"
                }
            ],
            "description": "Standard interfaces for event handling.",
            "keywords": [
                "events",
                "psr",
                "psr-14"
            ],
            "support": {
                "issues": "https://github.com/php-fig/event-dispatcher/issues",
                "source": "https://github.com/php-fig/event-dispatcher/tree/1.0.0"
            },
            "time": "2019-01-08T18:20:26+00:00"
        },
        {
            "name": "psr/http-client",
            "version": "1.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/http-client.git",
                "reference": "bb5906edc1c324c9a05aa0873d40117941e5fa90"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/http-client/zipball/bb5906edc1c324c9a05aa0873d40117941e5fa90",
                "reference": "bb5906edc1c324c9a05aa0873d40117941e5fa90",
                "shasum": ""
            },
            "require": {
                "php": "^7.0 || ^8.0",
                "psr/http-message": "^1.0 || ^2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Psr\\Http\\Client\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "PHP-FIG",
                    "homepage": "https://www.php-fig.org/"
                }
            ],
            "description": "Common interface for HTTP clients",
            "homepage": "https://github.com/php-fig/http-client",
            "keywords": [
                "http",
                "http-client",
                "psr",
                "psr-18"
            ],
            "support": {
                "source": "https://github.com/php-fig/http-client"
            },
            "time": "2023-09-23T14:17:50+00:00"
        },
        {
            "name": "psr/http-factory",
            "version": "1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/http-factory.git",
                "reference": "2b4765fddfe3b508ac62f829e852b1501d3f6e8a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/http-factory/zipball/2b4765fddfe3b508ac62f829e852b1501d3f6e8a",
                "reference": "2b4765fddfe3b508ac62f829e852b1501d3f6e8a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1",
                "psr/http-message": "^1.0 || ^2.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Psr\\Http\\Message\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "PHP-FIG",
                    "homepage": "https://www.php-fig.org/"
                }
            ],
            "description": "PSR-17: Common interfaces for PSR-7 HTTP message factories",
            "keywords": [
                "factory",
                "http",
                "message",
                "psr",
                "psr-17",
                "psr-7",
                "request",
                "response"
            ],
            "support": {
                "source": "https://github.com/php-fig/http-factory"
            },
            "time": "2024-04-15T12:06:14+00:00"
        },
        {
            "name": "psr/http-message",
            "version": "2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/http-message.git",
                "reference": "402d35bcb92c70c026d1a6a9883f06b2ead23d71"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/http-message/zipball/402d35bcb92c70c026d1a6a9883f06b2ead23d71",
                "reference": "402d35bcb92c70c026d1a6a9883f06b2ead23d71",
                "shasum": ""
            },
            "require": {
                "php": "^7.2 || ^8.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Psr\\Http\\Message\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "PHP-FIG",
                    "homepage": "https://www.php-fig.org/"
                }
            ],
            "description": "Common interface for HTTP messages",
            "homepage": "https://github.com/php-fig/http-message",
            "keywords": [
                "http",
                "http-message",
                "psr",
                "psr-7",
                "request",
                "response"
            ],
            "support": {
                "source": "https://github.com/php-fig/http-message/tree/2.0"
            },
            "time": "2023-04-04T09:54:51+00:00"
        },
        {
            "name": "psr/log",
            "version": "2.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/php-fig/log.git",
                "reference": "ef29f6d262798707a9edd554e2b82517ef3a9376"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/php-fig/log/zipball/ef29f6d262798707a9edd554e2b82517ef3a9376",
                "reference": "ef29f6d262798707a9edd554e2b82517ef3a9376",
                "shasum": ""
            },
            "require": {
                "php": ">=8.0.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Psr\\Log\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "PHP-FIG",
                    "homepage": "https://www.php-fig.org/"
                }
            ],
            "description": "Common interface for logging libraries",
            "homepage": "https://github.com/php-fig/log",
            "keywords": [
                "log",
                "psr",
                "psr-3"
            ],
            "support": {
                "source": "https://github.com/php-fig/log/tree/2.0.0"
            },
            "time": "2021-07-14T16:41:46+00:00"
        },
        {
            "name": "ralouphie/getallheaders",
            "version": "3.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/ralouphie/getallheaders.git",
                "reference": "120b605dfeb996808c31b6477290a714d356e822"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/ralouphie/getallheaders/zipball/120b605dfeb996808c31b6477290a714d356e822",
                "reference": "120b605dfeb996808c31b6477290a714d356e822",
                "shasum": ""
            },
            "require": {
                "php": ">=5.6"
            },
            "require-dev": {
                "php-coveralls/php-coveralls": "^2.1",
                "phpunit/phpunit": "^5 || ^6.5"
            },
            "type": "library",
            "autoload": {
                "files": [
                    "src/getallheaders.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Ralph Khattar",
                    "email": "ralph.khattar@gmail.com"
                }
            ],
            "description": "A polyfill for getallheaders.",
            "support": {
                "issues": "https://github.com/ralouphie/getallheaders/issues",
                "source": "https://github.com/ralouphie/getallheaders/tree/develop"
            },
            "time": "2019-03-08T08:55:37+00:00"
        },
        {
            "name": "ramsey/collection",
            "version": "2.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/ramsey/collection.git",
                "reference": "344572933ad0181accbf4ba763e85a0306a8c5e2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/ramsey/collection/zipball/344572933ad0181accbf4ba763e85a0306a8c5e2",
                "reference": "344572933ad0181accbf4ba763e85a0306a8c5e2",
                "shasum": ""
            },
            "require": {
                "php": "^8.1"
            },
            "require-dev": {
                "captainhook/plugin-composer": "^5.3",
                "ergebnis/composer-normalize": "^2.45",
                "fakerphp/faker": "^1.24",
                "hamcrest/hamcrest-php": "^2.0",
                "jangregor/phpstan-prophecy": "^2.1",
                "mockery/mockery": "^1.6",
                "php-parallel-lint/php-console-highlighter": "^1.0",
                "php-parallel-lint/php-parallel-lint": "^1.4",
                "phpspec/prophecy-phpunit": "^2.3",
                "phpstan/extension-installer": "^1.4",
                "phpstan/phpstan": "^2.1",
                "phpstan/phpstan-mockery": "^2.0",
                "phpstan/phpstan-phpunit": "^2.0",
                "phpunit/phpunit": "^10.5",
                "ramsey/coding-standard": "^2.3",
                "ramsey/conventional-commits": "^1.6",
                "roave/security-advisories": "dev-latest"
            },
            "type": "library",
            "extra": {
                "captainhook": {
                    "force-install": true
                },
                "ramsey/conventional-commits": {
                    "configFile": "conventional-commits.json"
                }
            },
            "autoload": {
                "psr-4": {
                    "Ramsey\\Collection\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Ben Ramsey",
                    "email": "ben@benramsey.com",
                    "homepage": "https://benramsey.com"
                }
            ],
            "description": "A PHP library for representing and manipulating collections.",
            "keywords": [
                "array",
                "collection",
                "hash",
                "map",
                "queue",
                "set"
            ],
            "support": {
                "issues": "https://github.com/ramsey/collection/issues",
                "source": "https://github.com/ramsey/collection/tree/2.1.1"
            },
            "time": "2025-03-22T05:38:12+00:00"
        },
        {
            "name": "ramsey/uuid",
            "version": "4.8.1",
            "source": {
                "type": "git",
                "url": "https://github.com/ramsey/uuid.git",
                "reference": "fdf4dd4e2ff1813111bd0ad58d7a1ddbb5b56c28"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/ramsey/uuid/zipball/fdf4dd4e2ff1813111bd0ad58d7a1ddbb5b56c28",
                "reference": "fdf4dd4e2ff1813111bd0ad58d7a1ddbb5b56c28",
                "shasum": ""
            },
            "require": {
                "brick/math": "^0.8.8 || ^0.9 || ^0.10 || ^0.11 || ^0.12 || ^0.13",
                "ext-json": "*",
                "php": "^8.0",
                "ramsey/collection": "^1.2 || ^2.0"
            },
            "replace": {
                "rhumsaa/uuid": "self.version"
            },
            "require-dev": {
                "captainhook/captainhook": "^5.25",
                "captainhook/plugin-composer": "^5.3",
                "dealerdirect/phpcodesniffer-composer-installer": "^1.0",
                "ergebnis/composer-normalize": "^2.47",
                "mockery/mockery": "^1.6",
                "paragonie/random-lib": "^2",
                "php-mock/php-mock": "^2.6",
                "php-mock/php-mock-mockery": "^1.5",
                "php-parallel-lint/php-parallel-lint": "^1.4.0",
                "phpbench/phpbench": "^1.2.14",
                "phpstan/extension-installer": "^1.4",
                "phpstan/phpstan": "^2.1",
                "phpstan/phpstan-mockery": "^2.0",
                "phpstan/phpstan-phpunit": "^2.0",
                "phpunit/phpunit": "^9.6",
                "slevomat/coding-standard": "^8.18",
                "squizlabs/php_codesniffer": "^3.13"
            },
            "suggest": {
                "ext-bcmath": "Enables faster math with arbitrary-precision integers using BCMath.",
                "ext-gmp": "Enables faster math with arbitrary-precision integers using GMP.",
                "ext-uuid": "Enables the use of PeclUuidTimeGenerator and PeclUuidRandomGenerator.",
                "paragonie/random-lib": "Provides RandomLib for use with the RandomLibAdapter",
                "ramsey/uuid-doctrine": "Allows the use of Ramsey\\Uuid\\Uuid as Doctrine field type."
            },
            "type": "library",
            "extra": {
                "captainhook": {
                    "force-install": true
                }
            },
            "autoload": {
                "files": [
                    "src/functions.php"
                ],
                "psr-4": {
                    "Ramsey\\Uuid\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "A PHP library for generating and working with universally unique identifiers (UUIDs).",
            "keywords": [
                "guid",
                "identifier",
                "uuid"
            ],
            "support": {
                "issues": "https://github.com/ramsey/uuid/issues",
                "source": "https://github.com/ramsey/uuid/tree/4.8.1"
            },
            "time": "2025-06-01T06:28:46+00:00"
        },
        {
            "name": "react/promise",
            "version": "v3.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/reactphp/promise.git",
                "reference": "8a164643313c71354582dc850b42b33fa12a4b63"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/reactphp/promise/zipball/8a164643313c71354582dc850b42b33fa12a4b63",
                "reference": "8a164643313c71354582dc850b42b33fa12a4b63",
                "shasum": ""
            },
            "require": {
                "php": ">=7.1.0"
            },
            "require-dev": {
                "phpstan/phpstan": "1.10.39 || 1.4.10",
                "phpunit/phpunit": "^9.6 || ^7.5"
            },
            "type": "library",
            "autoload": {
                "files": [
                    "src/functions_include.php"
                ],
                "psr-4": {
                    "React\\Promise\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Jan Sorgalla",
                    "email": "jsorgalla@gmail.com",
                    "homepage": "https://sorgalla.com/"
                },
                {
                    "name": "Christian Lück",
                    "email": "christian@clue.engineering",
                    "homepage": "https://clue.engineering/"
                },
                {
                    "name": "Cees-Jan Kiewiet",
                    "email": "reactphp@ceesjankiewiet.nl",
                    "homepage": "https://wyrihaximus.net/"
                },
                {
                    "name": "Chris Boden",
                    "email": "cboden@gmail.com",
                    "homepage": "https://cboden.dev/"
                }
            ],
            "description": "A lightweight implementation of CommonJS Promises/A for PHP",
            "keywords": [
                "promise",
                "promises"
            ],
            "support": {
                "issues": "https://github.com/reactphp/promise/issues",
                "source": "https://github.com/reactphp/promise/tree/v3.2.0"
            },
            "funding": [
                {
                    "url": "https://opencollective.com/reactphp",
                    "type": "open_collective"
                }
            ],
            "time": "2024-05-24T10:39:05+00:00"
        },
        {
            "name": "setasign/fpdi",
            "version": "v2.6.3",
            "source": {
                "type": "git",
                "url": "https://github.com/Setasign/FPDI.git",
                "reference": "67c31f5e50c93c20579ca9e23035d8c540b51941"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Setasign/FPDI/zipball/67c31f5e50c93c20579ca9e23035d8c540b51941",
                "reference": "67c31f5e50c93c20579ca9e23035d8c540b51941",
                "shasum": ""
            },
            "require": {
                "ext-zlib": "*",
                "php": "^7.1 || ^8.0"
            },
            "conflict": {
                "setasign/tfpdf": "<1.31"
            },
            "require-dev": {
                "phpunit/phpunit": "^7",
                "setasign/fpdf": "~1.8.6",
                "setasign/tfpdf": "~1.33",
                "squizlabs/php_codesniffer": "^3.5",
                "tecnickcom/tcpdf": "^6.2"
            },
            "suggest": {
                "setasign/fpdf": "FPDI will extend this class but as it is also possible to use TCPDF or tFPDF as an alternative. There's no fixed dependency configured."
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "setasign\\Fpdi\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Jan Slabon",
                    "email": "jan.slabon@setasign.com",
                    "homepage": "https://www.setasign.com"
                },
                {
                    "name": "Maximilian Kresse",
                    "email": "maximilian.kresse@setasign.com",
                    "homepage": "https://www.setasign.com"
                }
            ],
            "description": "FPDI is a collection of PHP classes facilitating developers to read pages from existing PDF documents and use them as templates in FPDF. Because it is also possible to use FPDI with TCPDF, there are no fixed dependencies defined. Please see suggestions for packages which evaluates the dependencies automatically.",
            "homepage": "https://www.setasign.com/fpdi",
            "keywords": [
                "fpdf",
                "fpdi",
                "pdf"
            ],
            "support": {
                "issues": "https://github.com/Setasign/FPDI/issues",
                "source": "https://github.com/Setasign/FPDI/tree/v2.6.3"
            },
            "funding": [
                {
                    "url": "https://tidelift.com/funding/github/packagist/setasign/fpdi",
                    "type": "tidelift"
                }
            ],
            "time": "2025-02-05T13:22:35+00:00"
        },
        {
            "name": "spomky-labs/aes-key-wrap",
            "version": "v7.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/Spomky-Labs/aes-key-wrap.git",
                "reference": "fbeb834b1f83aa8fbdfbd4c12124f71d4c1606ae"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Spomky-Labs/aes-key-wrap/zipball/fbeb834b1f83aa8fbdfbd4c12124f71d4c1606ae",
                "reference": "fbeb834b1f83aa8fbdfbd4c12124f71d4c1606ae",
                "shasum": ""
            },
            "require": {
                "ext-mbstring": "*",
                "ext-openssl": "*",
                "php": ">=8.0"
            },
            "require-dev": {
                "infection/infection": "^0.25.4",
                "phpstan/extension-installer": "^1.1",
                "phpstan/phpstan": "^1.0",
                "phpstan/phpstan-beberlei-assert": "^1.0",
                "phpstan/phpstan-deprecation-rules": "^1.0",
                "phpstan/phpstan-phpunit": "^1.0",
                "phpstan/phpstan-strict-rules": "^1.0",
                "phpunit/phpunit": "^9.0",
                "rector/rector": "^0.12.5",
                "symplify/easy-coding-standard": "^10.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "AESKW\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Florent Morselli",
                    "homepage": "https://github.com/Spomky-Labs/aes-key-wrap/contributors"
                }
            ],
            "description": "AES Key Wrap for PHP.",
            "homepage": "https://github.com/Spomky-Labs/aes-key-wrap",
            "keywords": [
                "A128KW",
                "A192KW",
                "A256KW",
                "RFC3394",
                "RFC5649",
                "aes",
                "key",
                "padding",
                "wrap"
            ],
            "support": {
                "issues": "https://github.com/Spomky-Labs/aes-key-wrap/issues",
                "source": "https://github.com/Spomky-Labs/aes-key-wrap/tree/v7.0.0"
            },
            "funding": [
                {
                    "url": "https://github.com/Spomky",
                    "type": "github"
                },
                {
                    "url": "https://www.patreon.com/FlorentMorselli",
                    "type": "patreon"
                }
            ],
            "time": "2021-12-08T20:36:59+00:00"
        },
        {
            "name": "spomky-labs/pki-framework",
            "version": "1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/Spomky-Labs/pki-framework.git",
                "reference": "eced5b5ce70518b983ff2be486e902bbd15135ae"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Spomky-Labs/pki-framework/zipball/eced5b5ce70518b983ff2be486e902bbd15135ae",
                "reference": "eced5b5ce70518b983ff2be486e902bbd15135ae",
                "shasum": ""
            },
            "require": {
                "brick/math": "^0.10|^0.11|^0.12|^0.13",
                "ext-mbstring": "*",
                "php": ">=8.1"
            },
            "require-dev": {
                "ekino/phpstan-banned-code": "^1.0|^2.0|^3.0",
                "ext-gmp": "*",
                "ext-openssl": "*",
                "infection/infection": "^0.28|^0.29",
                "php-parallel-lint/php-parallel-lint": "^1.3",
                "phpstan/extension-installer": "^1.3|^2.0",
                "phpstan/phpstan": "^1.8|^2.0",
                "phpstan/phpstan-deprecation-rules": "^1.0|^2.0",
                "phpstan/phpstan-phpunit": "^1.1|^2.0",
                "phpstan/phpstan-strict-rules": "^1.3|^2.0",
                "phpunit/phpunit": "^10.1|^11.0|^12.0",
                "rector/rector": "^1.0|^2.0",
                "roave/security-advisories": "dev-latest",
                "symfony/string": "^6.4|^7.0",
                "symfony/var-dumper": "^6.4|^7.0",
                "symplify/easy-coding-standard": "^12.0"
            },
            "suggest": {
                "ext-bcmath": "For better performance (or GMP)",
                "ext-gmp": "For better performance (or BCMath)",
                "ext-openssl": "For OpenSSL based cyphering"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "SpomkyLabs\\Pki\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Joni Eskelinen",
                    "email": "jonieske@gmail.com",
                    "role": "Original developer"
                },
                {
                    "name": "Florent Morselli",
                    "email": "florent.morselli@spomky-labs.com",
                    "role": "Spomky-Labs PKI Framework developer"
                }
            ],
            "description": "A PHP framework for managing Public Key Infrastructures. It comprises X.509 public key certificates, attribute certificates, certification requests and certification path validation.",
            "homepage": "https://github.com/spomky-labs/pki-framework",
            "keywords": [
                "DER",
                "Private Key",
                "ac",
                "algorithm identifier",
                "asn.1",
                "asn1",
                "attribute certificate",
                "certificate",
                "certification request",
                "cryptography",
                "csr",
                "decrypt",
                "ec",
                "encrypt",
                "pem",
                "pkcs",
                "public key",
                "rsa",
                "sign",
                "signature",
                "verify",
                "x.509",
                "x.690",
                "x509",
                "x690"
            ],
            "support": {
                "issues": "https://github.com/Spomky-Labs/pki-framework/issues",
                "source": "https://github.com/Spomky-Labs/pki-framework/tree/1.3.0"
            },
            "funding": [
                {
                    "url": "https://github.com/Spomky",
                    "type": "github"
                },
                {
                    "url": "https://www.patreon.com/FlorentMorselli",
                    "type": "patreon"
                }
            ],
            "time": "2025-06-13T08:35:04+00:00"
        },
        {
            "name": "symfony/config",
            "version": "v6.4.22",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/config.git",
                "reference": "af5917a3b1571f54689e56677a3f06440d2fe4c7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/config/zipball/af5917a3b1571f54689e56677a3f06440d2fe4c7",
                "reference": "af5917a3b1571f54689e56677a3f06440d2fe4c7",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/deprecation-contracts": "^2.5|^3",
                "symfony/filesystem": "^5.4|^6.0|^7.0",
                "symfony/polyfill-ctype": "~1.8"
            },
            "conflict": {
                "symfony/finder": "<5.4",
                "symfony/service-contracts": "<2.5"
            },
            "require-dev": {
                "symfony/event-dispatcher": "^5.4|^6.0|^7.0",
                "symfony/finder": "^5.4|^6.0|^7.0",
                "symfony/messenger": "^5.4|^6.0|^7.0",
                "symfony/service-contracts": "^2.5|^3",
                "symfony/yaml": "^5.4|^6.0|^7.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Config\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Helps you find, load, combine, autofill and validate configuration values of any kind",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/config/tree/v6.4.22"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-05-14T06:00:01+00:00"
        },
        {
            "name": "symfony/console",
            "version": "v6.4.22",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/console.git",
                "reference": "7d29659bc3c9d8e9a34e2c3414ef9e9e003e6cf3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/console/zipball/7d29659bc3c9d8e9a34e2c3414ef9e9e003e6cf3",
                "reference": "7d29659bc3c9d8e9a34e2c3414ef9e9e003e6cf3",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/deprecation-contracts": "^2.5|^3",
                "symfony/polyfill-mbstring": "~1.0",
                "symfony/service-contracts": "^2.5|^3",
                "symfony/string": "^5.4|^6.0|^7.0"
            },
            "conflict": {
                "symfony/dependency-injection": "<5.4",
                "symfony/dotenv": "<5.4",
                "symfony/event-dispatcher": "<5.4",
                "symfony/lock": "<5.4",
                "symfony/process": "<5.4"
            },
            "provide": {
                "psr/log-implementation": "1.0|2.0|3.0"
            },
            "require-dev": {
                "psr/log": "^1|^2|^3",
                "symfony/config": "^5.4|^6.0|^7.0",
                "symfony/dependency-injection": "^5.4|^6.0|^7.0",
                "symfony/event-dispatcher": "^5.4|^6.0|^7.0",
                "symfony/http-foundation": "^6.4|^7.0",
                "symfony/http-kernel": "^6.4|^7.0",
                "symfony/lock": "^5.4|^6.0|^7.0",
                "symfony/messenger": "^5.4|^6.0|^7.0",
                "symfony/process": "^5.4|^6.0|^7.0",
                "symfony/stopwatch": "^5.4|^6.0|^7.0",
                "symfony/var-dumper": "^5.4|^6.0|^7.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Console\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Eases the creation of beautiful and testable command line interfaces",
            "homepage": "https://symfony.com",
            "keywords": [
                "cli",
                "command-line",
                "console",
                "terminal"
            ],
            "support": {
                "source": "https://github.com/symfony/console/tree/v6.4.22"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-05-07T07:05:04+00:00"
        },
        {
            "name": "symfony/dependency-injection",
            "version": "v6.4.22",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/dependency-injection.git",
                "reference": "8cb11f833d1f5bfbb2df97dfc23c92b4d42c18d9"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/dependency-injection/zipball/8cb11f833d1f5bfbb2df97dfc23c92b4d42c18d9",
                "reference": "8cb11f833d1f5bfbb2df97dfc23c92b4d42c18d9",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "psr/container": "^1.1|^2.0",
                "symfony/deprecation-contracts": "^2.5|^3",
                "symfony/service-contracts": "^2.5|^3.0",
                "symfony/var-exporter": "^6.4.20|^7.2.5"
            },
            "conflict": {
                "ext-psr": "<1.1|>=2",
                "symfony/config": "<6.1",
                "symfony/finder": "<5.4",
                "symfony/proxy-manager-bridge": "<6.3",
                "symfony/yaml": "<5.4"
            },
            "provide": {
                "psr/container-implementation": "1.1|2.0",
                "symfony/service-implementation": "1.1|2.0|3.0"
            },
            "require-dev": {
                "symfony/config": "^6.1|^7.0",
                "symfony/expression-language": "^5.4|^6.0|^7.0",
                "symfony/yaml": "^5.4|^6.0|^7.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\DependencyInjection\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Allows you to standardize and centralize the way objects are constructed in your application",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/dependency-injection/tree/v6.4.22"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-05-17T07:35:26+00:00"
        },
        {
            "name": "symfony/deprecation-contracts",
            "version": "v3.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/deprecation-contracts.git",
                "reference": "63afe740e99a13ba87ec199bb07bbdee937a5b62"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/deprecation-contracts/zipball/63afe740e99a13ba87ec199bb07bbdee937a5b62",
                "reference": "63afe740e99a13ba87ec199bb07bbdee937a5b62",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/contracts",
                    "name": "symfony/contracts"
                },
                "branch-alias": {
                    "dev-main": "3.6-dev"
                }
            },
            "autoload": {
                "files": [
                    "function.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "A generic function and convention to trigger deprecation notices",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/deprecation-contracts/tree/v3.6.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-09-25T14:21:43+00:00"
        },
        {
            "name": "symfony/error-handler",
            "version": "v6.4.22",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/error-handler.git",
                "reference": "ce765a2d28b3cce61de1fb916e207767a73171d1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/error-handler/zipball/ce765a2d28b3cce61de1fb916e207767a73171d1",
                "reference": "ce765a2d28b3cce61de1fb916e207767a73171d1",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "psr/log": "^1|^2|^3",
                "symfony/var-dumper": "^5.4|^6.0|^7.0"
            },
            "conflict": {
                "symfony/deprecation-contracts": "<2.5",
                "symfony/http-kernel": "<6.4"
            },
            "require-dev": {
                "symfony/deprecation-contracts": "^2.5|^3",
                "symfony/http-kernel": "^6.4|^7.0",
                "symfony/serializer": "^5.4|^6.0|^7.0"
            },
            "bin": [
                "Resources/bin/patch-type-declarations"
            ],
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\ErrorHandler\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Provides tools to manage errors and ease debugging PHP code",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/error-handler/tree/v6.4.22"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-05-28T12:00:15+00:00"
        },
        {
            "name": "symfony/event-dispatcher",
            "version": "v6.4.13",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/event-dispatcher.git",
                "reference": "0ffc48080ab3e9132ea74ef4e09d8dcf26bf897e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/event-dispatcher/zipball/0ffc48080ab3e9132ea74ef4e09d8dcf26bf897e",
                "reference": "0ffc48080ab3e9132ea74ef4e09d8dcf26bf897e",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/event-dispatcher-contracts": "^2.5|^3"
            },
            "conflict": {
                "symfony/dependency-injection": "<5.4",
                "symfony/service-contracts": "<2.5"
            },
            "provide": {
                "psr/event-dispatcher-implementation": "1.0",
                "symfony/event-dispatcher-implementation": "2.0|3.0"
            },
            "require-dev": {
                "psr/log": "^1|^2|^3",
                "symfony/config": "^5.4|^6.0|^7.0",
                "symfony/dependency-injection": "^5.4|^6.0|^7.0",
                "symfony/error-handler": "^5.4|^6.0|^7.0",
                "symfony/expression-language": "^5.4|^6.0|^7.0",
                "symfony/http-foundation": "^5.4|^6.0|^7.0",
                "symfony/service-contracts": "^2.5|^3",
                "symfony/stopwatch": "^5.4|^6.0|^7.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\EventDispatcher\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Provides tools that allow your application components to communicate with each other by dispatching events and listening to them",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/event-dispatcher/tree/v6.4.13"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-09-25T14:18:03+00:00"
        },
        {
            "name": "symfony/event-dispatcher-contracts",
            "version": "v3.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/event-dispatcher-contracts.git",
                "reference": "59eb412e93815df44f05f342958efa9f46b1e586"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/event-dispatcher-contracts/zipball/59eb412e93815df44f05f342958efa9f46b1e586",
                "reference": "59eb412e93815df44f05f342958efa9f46b1e586",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "psr/event-dispatcher": "^1"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/contracts",
                    "name": "symfony/contracts"
                },
                "branch-alias": {
                    "dev-main": "3.6-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Contracts\\EventDispatcher\\": ""
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Generic abstractions related to dispatching event",
            "homepage": "https://symfony.com",
            "keywords": [
                "abstractions",
                "contracts",
                "decoupling",
                "interfaces",
                "interoperability",
                "standards"
            ],
            "support": {
                "source": "https://github.com/symfony/event-dispatcher-contracts/tree/v3.6.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-09-25T14:21:43+00:00"
        },
        {
            "name": "symfony/filesystem",
            "version": "v6.4.13",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/filesystem.git",
                "reference": "4856c9cf585d5a0313d8d35afd681a526f038dd3"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/filesystem/zipball/4856c9cf585d5a0313d8d35afd681a526f038dd3",
                "reference": "4856c9cf585d5a0313d8d35afd681a526f038dd3",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/polyfill-ctype": "~1.8",
                "symfony/polyfill-mbstring": "~1.8"
            },
            "require-dev": {
                "symfony/process": "^5.4|^6.4|^7.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Filesystem\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Provides basic utilities for the filesystem",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/filesystem/tree/v6.4.13"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-10-25T15:07:50+00:00"
        },
        {
            "name": "symfony/finder",
            "version": "v6.4.17",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/finder.git",
                "reference": "1d0e8266248c5d9ab6a87e3789e6dc482af3c9c7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/finder/zipball/1d0e8266248c5d9ab6a87e3789e6dc482af3c9c7",
                "reference": "1d0e8266248c5d9ab6a87e3789e6dc482af3c9c7",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1"
            },
            "require-dev": {
                "symfony/filesystem": "^6.0|^7.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Finder\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Finds files and directories via an intuitive fluent interface",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/finder/tree/v6.4.17"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-12-29T13:51:37+00:00"
        },
        {
            "name": "symfony/http-client",
            "version": "v6.4.19",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/http-client.git",
                "reference": "3294a433fc9d12ae58128174896b5b1822c28dad"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/http-client/zipball/3294a433fc9d12ae58128174896b5b1822c28dad",
                "reference": "3294a433fc9d12ae58128174896b5b1822c28dad",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "psr/log": "^1|^2|^3",
                "symfony/deprecation-contracts": "^2.5|^3",
                "symfony/http-client-contracts": "~3.4.4|^3.5.2",
                "symfony/service-contracts": "^2.5|^3"
            },
            "conflict": {
                "php-http/discovery": "<1.15",
                "symfony/http-foundation": "<6.3"
            },
            "provide": {
                "php-http/async-client-implementation": "*",
                "php-http/client-implementation": "*",
                "psr/http-client-implementation": "1.0",
                "symfony/http-client-implementation": "3.0"
            },
            "require-dev": {
                "amphp/amp": "^2.5",
                "amphp/http-client": "^4.2.1",
                "amphp/http-tunnel": "^1.0",
                "amphp/socket": "^1.1",
                "guzzlehttp/promises": "^1.4|^2.0",
                "nyholm/psr7": "^1.0",
                "php-http/httplug": "^1.0|^2.0",
                "psr/http-client": "^1.0",
                "symfony/dependency-injection": "^5.4|^6.0|^7.0",
                "symfony/http-kernel": "^5.4|^6.0|^7.0",
                "symfony/messenger": "^5.4|^6.0|^7.0",
                "symfony/process": "^5.4|^6.0|^7.0",
                "symfony/stopwatch": "^5.4|^6.0|^7.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\HttpClient\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Provides powerful methods to fetch HTTP resources synchronously or asynchronously",
            "homepage": "https://symfony.com",
            "keywords": [
                "http"
            ],
            "support": {
                "source": "https://github.com/symfony/http-client/tree/v6.4.19"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-02-13T09:55:13+00:00"
        },
        {
            "name": "symfony/http-client-contracts",
            "version": "v3.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/http-client-contracts.git",
                "reference": "75d7043853a42837e68111812f4d964b01e5101c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/http-client-contracts/zipball/75d7043853a42837e68111812f4d964b01e5101c",
                "reference": "75d7043853a42837e68111812f4d964b01e5101c",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/contracts",
                    "name": "symfony/contracts"
                },
                "branch-alias": {
                    "dev-main": "3.6-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Contracts\\HttpClient\\": ""
                },
                "exclude-from-classmap": [
                    "/Test/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Generic abstractions related to HTTP clients",
            "homepage": "https://symfony.com",
            "keywords": [
                "abstractions",
                "contracts",
                "decoupling",
                "interfaces",
                "interoperability",
                "standards"
            ],
            "support": {
                "source": "https://github.com/symfony/http-client-contracts/tree/v3.6.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-04-29T11:18:49+00:00"
        },
        {
            "name": "symfony/http-foundation",
            "version": "v6.4.22",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/http-foundation.git",
                "reference": "6b7c97fe1ddac8df3cc9ba6410c8abc683e148ae"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/http-foundation/zipball/6b7c97fe1ddac8df3cc9ba6410c8abc683e148ae",
                "reference": "6b7c97fe1ddac8df3cc9ba6410c8abc683e148ae",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/deprecation-contracts": "^2.5|^3",
                "symfony/polyfill-mbstring": "~1.1",
                "symfony/polyfill-php83": "^1.27"
            },
            "conflict": {
                "symfony/cache": "<6.4.12|>=7.0,<7.1.5"
            },
            "require-dev": {
                "doctrine/dbal": "^2.13.1|^3|^4",
                "predis/predis": "^1.1|^2.0",
                "symfony/cache": "^6.4.12|^7.1.5",
                "symfony/dependency-injection": "^5.4|^6.0|^7.0",
                "symfony/expression-language": "^5.4|^6.0|^7.0",
                "symfony/http-kernel": "^5.4.12|^6.0.12|^6.1.4|^7.0",
                "symfony/mime": "^5.4|^6.0|^7.0",
                "symfony/rate-limiter": "^5.4|^6.0|^7.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\HttpFoundation\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Defines an object-oriented layer for the HTTP specification",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/http-foundation/tree/v6.4.22"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-05-11T15:36:20+00:00"
        },
        {
            "name": "symfony/http-kernel",
            "version": "v6.4.22",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/http-kernel.git",
                "reference": "15c105b839a7cfa1bc0989c091bfb6477f23b673"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/http-kernel/zipball/15c105b839a7cfa1bc0989c091bfb6477f23b673",
                "reference": "15c105b839a7cfa1bc0989c091bfb6477f23b673",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "psr/log": "^1|^2|^3",
                "symfony/deprecation-contracts": "^2.5|^3",
                "symfony/error-handler": "^6.4|^7.0",
                "symfony/event-dispatcher": "^5.4|^6.0|^7.0",
                "symfony/http-foundation": "^6.4|^7.0",
                "symfony/polyfill-ctype": "^1.8"
            },
            "conflict": {
                "symfony/browser-kit": "<5.4",
                "symfony/cache": "<5.4",
                "symfony/config": "<6.1",
                "symfony/console": "<5.4",
                "symfony/dependency-injection": "<6.4",
                "symfony/doctrine-bridge": "<5.4",
                "symfony/form": "<5.4",
                "symfony/http-client": "<5.4",
                "symfony/http-client-contracts": "<2.5",
                "symfony/mailer": "<5.4",
                "symfony/messenger": "<5.4",
                "symfony/translation": "<5.4",
                "symfony/translation-contracts": "<2.5",
                "symfony/twig-bridge": "<5.4",
                "symfony/validator": "<6.4",
                "symfony/var-dumper": "<6.3",
                "twig/twig": "<2.13"
            },
            "provide": {
                "psr/log-implementation": "1.0|2.0|3.0"
            },
            "require-dev": {
                "psr/cache": "^1.0|^2.0|^3.0",
                "symfony/browser-kit": "^5.4|^6.0|^7.0",
                "symfony/clock": "^6.2|^7.0",
                "symfony/config": "^6.1|^7.0",
                "symfony/console": "^5.4|^6.0|^7.0",
                "symfony/css-selector": "^5.4|^6.0|^7.0",
                "symfony/dependency-injection": "^6.4|^7.0",
                "symfony/dom-crawler": "^5.4|^6.0|^7.0",
                "symfony/expression-language": "^5.4|^6.0|^7.0",
                "symfony/finder": "^5.4|^6.0|^7.0",
                "symfony/http-client-contracts": "^2.5|^3",
                "symfony/process": "^5.4|^6.0|^7.0",
                "symfony/property-access": "^5.4.5|^6.0.5|^7.0",
                "symfony/routing": "^5.4|^6.0|^7.0",
                "symfony/serializer": "^6.4.4|^7.0.4",
                "symfony/stopwatch": "^5.4|^6.0|^7.0",
                "symfony/translation": "^5.4|^6.0|^7.0",
                "symfony/translation-contracts": "^2.5|^3",
                "symfony/uid": "^5.4|^6.0|^7.0",
                "symfony/validator": "^6.4|^7.0",
                "symfony/var-dumper": "^5.4|^6.4|^7.0",
                "symfony/var-exporter": "^6.2|^7.0",
                "twig/twig": "^2.13|^3.0.4"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\HttpKernel\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Provides a structured process for converting a Request into a Response",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/http-kernel/tree/v6.4.22"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-05-29T07:23:40+00:00"
        },
        {
            "name": "symfony/polyfill-ctype",
            "version": "v1.32.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-ctype.git",
                "reference": "a3cc8b044a6ea513310cbd48ef7333b384945638"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-ctype/zipball/a3cc8b044a6ea513310cbd48ef7333b384945638",
                "reference": "a3cc8b044a6ea513310cbd48ef7333b384945638",
                "shasum": ""
            },
            "require": {
                "php": ">=7.2"
            },
            "provide": {
                "ext-ctype": "*"
            },
            "suggest": {
                "ext-ctype": "For best performance"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/polyfill",
                    "name": "symfony/polyfill"
                }
            },
            "autoload": {
                "files": [
                    "bootstrap.php"
                ],
                "psr-4": {
                    "Symfony\\Polyfill\\Ctype\\": ""
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Gert de Pagter",
                    "email": "BackEndTea@gmail.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill for ctype functions",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "ctype",
                "polyfill",
                "portable"
            ],
            "support": {
                "source": "https://github.com/symfony/polyfill-ctype/tree/v1.32.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-09-09T11:45:10+00:00"
        },
        {
            "name": "symfony/polyfill-intl-grapheme",
            "version": "v1.32.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-intl-grapheme.git",
                "reference": "b9123926e3b7bc2f98c02ad54f6a4b02b91a8abe"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-intl-grapheme/zipball/b9123926e3b7bc2f98c02ad54f6a4b02b91a8abe",
                "reference": "b9123926e3b7bc2f98c02ad54f6a4b02b91a8abe",
                "shasum": ""
            },
            "require": {
                "php": ">=7.2"
            },
            "suggest": {
                "ext-intl": "For best performance"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/polyfill",
                    "name": "symfony/polyfill"
                }
            },
            "autoload": {
                "files": [
                    "bootstrap.php"
                ],
                "psr-4": {
                    "Symfony\\Polyfill\\Intl\\Grapheme\\": ""
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill for intl's grapheme_* functions",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "grapheme",
                "intl",
                "polyfill",
                "portable",
                "shim"
            ],
            "support": {
                "source": "https://github.com/symfony/polyfill-intl-grapheme/tree/v1.32.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-09-09T11:45:10+00:00"
        },
        {
            "name": "symfony/polyfill-intl-normalizer",
            "version": "v1.32.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-intl-normalizer.git",
                "reference": "3833d7255cc303546435cb650316bff708a1c75c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-intl-normalizer/zipball/3833d7255cc303546435cb650316bff708a1c75c",
                "reference": "3833d7255cc303546435cb650316bff708a1c75c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.2"
            },
            "suggest": {
                "ext-intl": "For best performance"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/polyfill",
                    "name": "symfony/polyfill"
                }
            },
            "autoload": {
                "files": [
                    "bootstrap.php"
                ],
                "psr-4": {
                    "Symfony\\Polyfill\\Intl\\Normalizer\\": ""
                },
                "classmap": [
                    "Resources/stubs"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill for intl's Normalizer class and related functions",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "intl",
                "normalizer",
                "polyfill",
                "portable",
                "shim"
            ],
            "support": {
                "source": "https://github.com/symfony/polyfill-intl-normalizer/tree/v1.32.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-09-09T11:45:10+00:00"
        },
        {
            "name": "symfony/polyfill-mbstring",
            "version": "v1.32.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-mbstring.git",
                "reference": "6d857f4d76bd4b343eac26d6b539585d2bc56493"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-mbstring/zipball/6d857f4d76bd4b343eac26d6b539585d2bc56493",
                "reference": "6d857f4d76bd4b343eac26d6b539585d2bc56493",
                "shasum": ""
            },
            "require": {
                "ext-iconv": "*",
                "php": ">=7.2"
            },
            "provide": {
                "ext-mbstring": "*"
            },
            "suggest": {
                "ext-mbstring": "For best performance"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/polyfill",
                    "name": "symfony/polyfill"
                }
            },
            "autoload": {
                "files": [
                    "bootstrap.php"
                ],
                "psr-4": {
                    "Symfony\\Polyfill\\Mbstring\\": ""
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill for the Mbstring extension",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "mbstring",
                "polyfill",
                "portable",
                "shim"
            ],
            "support": {
                "source": "https://github.com/symfony/polyfill-mbstring/tree/v1.32.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-12-23T08:48:59+00:00"
        },
        {
            "name": "symfony/polyfill-php80",
            "version": "v1.32.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-php80.git",
                "reference": "0cc9dd0f17f61d8131e7df6b84bd344899fe2608"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-php80/zipball/0cc9dd0f17f61d8131e7df6b84bd344899fe2608",
                "reference": "0cc9dd0f17f61d8131e7df6b84bd344899fe2608",
                "shasum": ""
            },
            "require": {
                "php": ">=7.2"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/polyfill",
                    "name": "symfony/polyfill"
                }
            },
            "autoload": {
                "files": [
                    "bootstrap.php"
                ],
                "psr-4": {
                    "Symfony\\Polyfill\\Php80\\": ""
                },
                "classmap": [
                    "Resources/stubs"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Ion Bazan",
                    "email": "ion.bazan@gmail.com"
                },
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill backporting some PHP 8.0+ features to lower PHP versions",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "polyfill",
                "portable",
                "shim"
            ],
            "support": {
                "source": "https://github.com/symfony/polyfill-php80/tree/v1.32.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-01-02T08:10:11+00:00"
        },
        {
            "name": "symfony/polyfill-php83",
            "version": "v1.32.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-php83.git",
                "reference": "2fb86d65e2d424369ad2905e83b236a8805ba491"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-php83/zipball/2fb86d65e2d424369ad2905e83b236a8805ba491",
                "reference": "2fb86d65e2d424369ad2905e83b236a8805ba491",
                "shasum": ""
            },
            "require": {
                "php": ">=7.2"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/polyfill",
                    "name": "symfony/polyfill"
                }
            },
            "autoload": {
                "files": [
                    "bootstrap.php"
                ],
                "psr-4": {
                    "Symfony\\Polyfill\\Php83\\": ""
                },
                "classmap": [
                    "Resources/stubs"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill backporting some PHP 8.3+ features to lower PHP versions",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "polyfill",
                "portable",
                "shim"
            ],
            "support": {
                "source": "https://github.com/symfony/polyfill-php83/tree/v1.32.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-09-09T11:45:10+00:00"
        },
        {
            "name": "symfony/service-contracts",
            "version": "v3.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/service-contracts.git",
                "reference": "f021b05a130d35510bd6b25fe9053c2a8a15d5d4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/service-contracts/zipball/f021b05a130d35510bd6b25fe9053c2a8a15d5d4",
                "reference": "f021b05a130d35510bd6b25fe9053c2a8a15d5d4",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "psr/container": "^1.1|^2.0",
                "symfony/deprecation-contracts": "^2.5|^3"
            },
            "conflict": {
                "ext-psr": "<1.1|>=2"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/contracts",
                    "name": "symfony/contracts"
                },
                "branch-alias": {
                    "dev-main": "3.6-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Contracts\\Service\\": ""
                },
                "exclude-from-classmap": [
                    "/Test/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Generic abstractions related to writing services",
            "homepage": "https://symfony.com",
            "keywords": [
                "abstractions",
                "contracts",
                "decoupling",
                "interfaces",
                "interoperability",
                "standards"
            ],
            "support": {
                "source": "https://github.com/symfony/service-contracts/tree/v3.6.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-04-25T09:37:31+00:00"
        },
        {
            "name": "symfony/string",
            "version": "v6.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/string.git",
                "reference": "73e2c6966a5aef1d4892873ed5322245295370c6"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/string/zipball/73e2c6966a5aef1d4892873ed5322245295370c6",
                "reference": "73e2c6966a5aef1d4892873ed5322245295370c6",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/polyfill-ctype": "~1.8",
                "symfony/polyfill-intl-grapheme": "~1.0",
                "symfony/polyfill-intl-normalizer": "~1.0",
                "symfony/polyfill-mbstring": "~1.0"
            },
            "conflict": {
                "symfony/translation-contracts": "<2.5"
            },
            "require-dev": {
                "symfony/error-handler": "^5.4|^6.0|^7.0",
                "symfony/http-client": "^5.4|^6.0|^7.0",
                "symfony/intl": "^6.2|^7.0",
                "symfony/translation-contracts": "^2.5|^3.0",
                "symfony/var-exporter": "^5.4|^6.0|^7.0"
            },
            "type": "library",
            "autoload": {
                "files": [
                    "Resources/functions.php"
                ],
                "psr-4": {
                    "Symfony\\Component\\String\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Provides an object-oriented API to strings and deals with bytes, UTF-8 code points and grapheme clusters in a unified way",
            "homepage": "https://symfony.com",
            "keywords": [
                "grapheme",
                "i18n",
                "string",
                "unicode",
                "utf-8",
                "utf8"
            ],
            "support": {
                "source": "https://github.com/symfony/string/tree/v6.4.21"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-04-18T15:23:29+00:00"
        },
        {
            "name": "symfony/translation",
            "version": "v6.4.22",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/translation.git",
                "reference": "7e3b3b7146c6fab36ddff304a8041174bf6e17ad"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/translation/zipball/7e3b3b7146c6fab36ddff304a8041174bf6e17ad",
                "reference": "7e3b3b7146c6fab36ddff304a8041174bf6e17ad",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/deprecation-contracts": "^2.5|^3",
                "symfony/polyfill-mbstring": "~1.0",
                "symfony/translation-contracts": "^2.5|^3.0"
            },
            "conflict": {
                "symfony/config": "<5.4",
                "symfony/console": "<5.4",
                "symfony/dependency-injection": "<5.4",
                "symfony/http-client-contracts": "<2.5",
                "symfony/http-kernel": "<5.4",
                "symfony/service-contracts": "<2.5",
                "symfony/twig-bundle": "<5.4",
                "symfony/yaml": "<5.4"
            },
            "provide": {
                "symfony/translation-implementation": "2.3|3.0"
            },
            "require-dev": {
                "nikic/php-parser": "^4.18|^5.0",
                "psr/log": "^1|^2|^3",
                "symfony/config": "^5.4|^6.0|^7.0",
                "symfony/console": "^5.4|^6.0|^7.0",
                "symfony/dependency-injection": "^5.4|^6.0|^7.0",
                "symfony/finder": "^5.4|^6.0|^7.0",
                "symfony/http-client-contracts": "^2.5|^3.0",
                "symfony/http-kernel": "^5.4|^6.0|^7.0",
                "symfony/intl": "^5.4|^6.0|^7.0",
                "symfony/polyfill-intl-icu": "^1.21",
                "symfony/routing": "^5.4|^6.0|^7.0",
                "symfony/service-contracts": "^2.5|^3",
                "symfony/yaml": "^5.4|^6.0|^7.0"
            },
            "type": "library",
            "autoload": {
                "files": [
                    "Resources/functions.php"
                ],
                "psr-4": {
                    "Symfony\\Component\\Translation\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Provides tools to internationalize your application",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/translation/tree/v6.4.22"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-05-29T07:06:44+00:00"
        },
        {
            "name": "symfony/translation-contracts",
            "version": "v3.6.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/translation-contracts.git",
                "reference": "df210c7a2573f1913b2d17cc95f90f53a73d8f7d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/translation-contracts/zipball/df210c7a2573f1913b2d17cc95f90f53a73d8f7d",
                "reference": "df210c7a2573f1913b2d17cc95f90f53a73d8f7d",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/contracts",
                    "name": "symfony/contracts"
                },
                "branch-alias": {
                    "dev-main": "3.6-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Symfony\\Contracts\\Translation\\": ""
                },
                "exclude-from-classmap": [
                    "/Test/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Generic abstractions related to translation",
            "homepage": "https://symfony.com",
            "keywords": [
                "abstractions",
                "contracts",
                "decoupling",
                "interfaces",
                "interoperability",
                "standards"
            ],
            "support": {
                "source": "https://github.com/symfony/translation-contracts/tree/v3.6.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-09-27T08:32:26+00:00"
        },
        {
            "name": "symfony/var-dumper",
            "version": "v6.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/var-dumper.git",
                "reference": "22560f80c0c5cd58cc0bcaf73455ffd81eb380d5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/var-dumper/zipball/22560f80c0c5cd58cc0bcaf73455ffd81eb380d5",
                "reference": "22560f80c0c5cd58cc0bcaf73455ffd81eb380d5",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/deprecation-contracts": "^2.5|^3",
                "symfony/polyfill-mbstring": "~1.0"
            },
            "conflict": {
                "symfony/console": "<5.4"
            },
            "require-dev": {
                "ext-iconv": "*",
                "symfony/console": "^5.4|^6.0|^7.0",
                "symfony/error-handler": "^6.3|^7.0",
                "symfony/http-kernel": "^5.4|^6.0|^7.0",
                "symfony/process": "^5.4|^6.0|^7.0",
                "symfony/uid": "^5.4|^6.0|^7.0",
                "twig/twig": "^2.13|^3.0.4"
            },
            "bin": [
                "Resources/bin/var-dump-server"
            ],
            "type": "library",
            "autoload": {
                "files": [
                    "Resources/functions/dump.php"
                ],
                "psr-4": {
                    "Symfony\\Component\\VarDumper\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Provides mechanisms for walking through any arbitrary PHP variable",
            "homepage": "https://symfony.com",
            "keywords": [
                "debug",
                "dump"
            ],
            "support": {
                "source": "https://github.com/symfony/var-dumper/tree/v6.4.21"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-04-09T07:34:50+00:00"
        },
        {
            "name": "symfony/var-exporter",
            "version": "v6.4.22",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/var-exporter.git",
                "reference": "f28cf841f5654955c9f88ceaf4b9dc29571988a9"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/var-exporter/zipball/f28cf841f5654955c9f88ceaf4b9dc29571988a9",
                "reference": "f28cf841f5654955c9f88ceaf4b9dc29571988a9",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/deprecation-contracts": "^2.5|^3"
            },
            "require-dev": {
                "symfony/property-access": "^6.4|^7.0",
                "symfony/serializer": "^6.4|^7.0",
                "symfony/var-dumper": "^5.4|^6.0|^7.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\VarExporter\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Allows exporting any serializable PHP data structure to plain PHP code",
            "homepage": "https://symfony.com",
            "keywords": [
                "clone",
                "construct",
                "export",
                "hydrate",
                "instantiate",
                "lazy-loading",
                "proxy",
                "serialize"
            ],
            "support": {
                "source": "https://github.com/symfony/var-exporter/tree/v6.4.22"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-05-14T13:00:13+00:00"
        },
        {
            "name": "symfony/yaml",
            "version": "v6.4.21",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/yaml.git",
                "reference": "f01987f45676778b474468aa266fe2eda1f2bc7e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/yaml/zipball/f01987f45676778b474468aa266fe2eda1f2bc7e",
                "reference": "f01987f45676778b474468aa266fe2eda1f2bc7e",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/deprecation-contracts": "^2.5|^3",
                "symfony/polyfill-ctype": "^1.8"
            },
            "conflict": {
                "symfony/console": "<5.4"
            },
            "require-dev": {
                "symfony/console": "^5.4|^6.0|^7.0"
            },
            "bin": [
                "Resources/bin/yaml-lint"
            ],
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Yaml\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Loads and dumps YAML files",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/yaml/tree/v6.4.21"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-04-04T09:48:44+00:00"
        },
        {
            "name": "web-token/jwt-framework",
            "version": "3.4.8",
            "source": {
                "type": "git",
                "url": "https://github.com/web-token/jwt-framework.git",
                "reference": "788267095b0b0c3ba42559eb2ec955f416628ec0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/web-token/jwt-framework/zipball/788267095b0b0c3ba42559eb2ec955f416628ec0",
                "reference": "788267095b0b0c3ba42559eb2ec955f416628ec0",
                "shasum": ""
            },
            "require": {
                "brick/math": "^0.9|^0.10|^0.11|^0.12",
                "ext-json": "*",
                "ext-mbstring": "*",
                "ext-openssl": "*",
                "ext-sodium": "*",
                "paragonie/constant_time_encoding": "^2.6|^3.0",
                "paragonie/sodium_compat": "^1.20|^2.0",
                "php": ">=8.1",
                "psr/cache": "^2.0|^3.0",
                "psr/clock": "^1.0",
                "psr/event-dispatcher": "^1.0",
                "psr/http-client": "^1.0",
                "psr/http-factory": "^1.0",
                "spomky-labs/aes-key-wrap": "^7.0",
                "spomky-labs/pki-framework": "^1.2.1",
                "symfony/config": "^5.4|^6.0|^7.0",
                "symfony/console": "^5.4|^6.0|^7.0",
                "symfony/dependency-injection": "^5.4|^6.0|^7.0",
                "symfony/event-dispatcher": "^5.4|^6.0|^7.0",
                "symfony/http-client": "^5.4|^6.0|^7.0",
                "symfony/http-kernel": "^5.4|^6.0|^7.0",
                "symfony/polyfill-mbstring": "^1.12"
            },
            "conflict": {
                "spomky-labs/jose": "*"
            },
            "replace": {
                "web-token/encryption-pack": "self.version",
                "web-token/jwt-bundle": "self.version",
                "web-token/jwt-checker": "self.version",
                "web-token/jwt-console": "self.version",
                "web-token/jwt-core": "self.version",
                "web-token/jwt-encryption": "self.version",
                "web-token/jwt-encryption-algorithm-aescbc": "self.version",
                "web-token/jwt-encryption-algorithm-aesgcm": "self.version",
                "web-token/jwt-encryption-algorithm-aesgcmkw": "self.version",
                "web-token/jwt-encryption-algorithm-aeskw": "self.version",
                "web-token/jwt-encryption-algorithm-dir": "self.version",
                "web-token/jwt-encryption-algorithm-ecdh-es": "self.version",
                "web-token/jwt-encryption-algorithm-experimental": "self.version",
                "web-token/jwt-encryption-algorithm-pbes2": "self.version",
                "web-token/jwt-encryption-algorithm-rsa": "self.version",
                "web-token/jwt-experimental": "self.version",
                "web-token/jwt-key-mgmt": "self.version",
                "web-token/jwt-library": "self.version",
                "web-token/jwt-nested-token": "self.version",
                "web-token/jwt-signature": "self.version",
                "web-token/jwt-signature-algorithm-ecdsa": "self.version",
                "web-token/jwt-signature-algorithm-eddsa": "self.version",
                "web-token/jwt-signature-algorithm-experimental": "self.version",
                "web-token/jwt-signature-algorithm-hmac": "self.version",
                "web-token/jwt-signature-algorithm-none": "self.version",
                "web-token/jwt-signature-algorithm-rsa": "self.version",
                "web-token/jwt-signature-pack": "self.version",
                "web-token/jwt-util-ecc": "self.version",
                "web-token/signature-pack": "self.version"
            },
            "require-dev": {
                "bjeavons/zxcvbn-php": "^1.3",
                "ekino/phpstan-banned-code": "^1.0",
                "ext-curl": "*",
                "ext-gmp": "*",
                "infection/infection": "^0.29",
                "matthiasnoback/symfony-config-test": "^5.0",
                "nyholm/psr7": "^1.8",
                "php-http/mock-client": "^1.5",
                "php-parallel-lint/php-parallel-lint": "^1.3",
                "phpbench/phpbench": "^1.2",
                "phpstan/extension-installer": "^1.3",
                "phpstan/phpstan": "^1.8",
                "phpstan/phpstan-deprecation-rules": "^1.0",
                "phpstan/phpstan-phpunit": "^1.1",
                "phpstan/phpstan-strict-rules": "^1.4",
                "phpunit/phpunit": "^10.1|^11.0",
                "qossmic/deptrac": "^2.0",
                "rector/rector": "^1.0",
                "roave/security-advisories": "dev-latest",
                "symfony/browser-kit": "^5.4|^6.0|^7.0",
                "symfony/finder": "^5.4|^6.0|^7.0",
                "symfony/framework-bundle": "^5.4|^6.0|^7.0",
                "symfony/phpunit-bridge": "^5.4|^6.0|^7.0",
                "symfony/serializer": "^5.4|^6.0|^7.0",
                "symfony/var-dumper": "^5.4|^6.0|^7.0",
                "symfony/yaml": "^5.4|^6.0|^7.0",
                "symplify/easy-coding-standard": "^12.0"
            },
            "suggest": {
                "bjeavons/zxcvbn-php": "Adds key quality check for oct keys.",
                "php-http/httplug": "To enable JKU/X5U support.",
                "php-http/httplug-bundle": "To enable JKU/X5U support.",
                "php-http/message-factory": "To enable JKU/X5U support.",
                "spomky-labs/aes-key-wrap": "To enable AES Key Wrap algorithm.",
                "symfony/serializer": "Use the Symfony serializer to serialize/unserialize JWS and JWE tokens.",
                "symfony/var-dumper": "Used to show data on the debug toolbar."
            },
            "type": "symfony-bundle",
            "autoload": {
                "psr-4": {
                    "Jose\\": "src/",
                    "Jose\\Component\\": "src/Library/",
                    "Jose\\Experimental\\": "src/Experimental/",
                    "Jose\\Bundle\\JoseFramework\\": "src/Bundle/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Florent Morselli",
                    "homepage": "https://github.com/Spomky"
                },
                {
                    "name": "All contributors",
                    "homepage": "https://github.com/web-token/jwt-bundle/contributors"
                }
            ],
            "description": "JSON Object Signing and Encryption library for PHP and Symfony Bundle.",
            "homepage": "https://github.com/web-token/jwt-framework",
            "keywords": [
                "JOSE",
                "JWE",
                "JWK",
                "JWKSet",
                "JWS",
                "Jot",
                "RFC7515",
                "RFC7516",
                "RFC7517",
                "RFC7518",
                "RFC7519",
                "RFC7520",
                "bundle",
                "jwa",
                "jwt",
                "symfony"
            ],
            "support": {
                "issues": "https://github.com/web-token/jwt-framework/issues",
                "source": "https://github.com/web-token/jwt-framework/tree/3.4.8"
            },
            "funding": [
                {
                    "url": "https://github.com/Spomky",
                    "type": "github"
                },
                {
                    "url": "https://www.patreon.com/FlorentMorselli",
                    "type": "patreon"
                }
            ],
            "time": "2025-05-07T09:11:18+00:00"
        },
        {
            "name": "zircote/swagger-php",
            "version": "3.3.7",
            "source": {
                "type": "git",
                "url": "https://github.com/zircote/swagger-php.git",
                "reference": "e8c3bb316e385e93a0c7e8b2aa0681079244c381"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/zircote/swagger-php/zipball/e8c3bb316e385e93a0c7e8b2aa0681079244c381",
                "reference": "e8c3bb316e385e93a0c7e8b2aa0681079244c381",
                "shasum": ""
            },
            "require": {
                "doctrine/annotations": "^1.7",
                "ext-json": "*",
                "php": ">=7.2",
                "psr/log": "^1.1 || ^2.0 || ^3.0",
                "symfony/finder": ">=2.2",
                "symfony/yaml": ">=3.3"
            },
            "require-dev": {
                "composer/package-versions-deprecated": "1.11.99.2",
                "friendsofphp/php-cs-fixer": "^2.17 || ^3.0",
                "phpunit/phpunit": ">=8.5.14"
            },
            "bin": [
                "bin/openapi"
            ],
            "type": "library",
            "autoload": {
                "files": [
                    "src/functions.php"
                ],
                "psr-4": {
                    "OpenApi\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "Apache-2.0"
            ],
            "authors": [
                {
                    "name": "Robert Allen",
                    "email": "zircote@gmail.com"
                },
                {
                    "name": "Bob Fanger",
                    "email": "bfanger@gmail.com",
                    "homepage": "https://bfanger.nl"
                },
                {
                    "name": "Martin Rademacher",
                    "email": "mano@radebatz.net",
                    "homepage": "https://radebatz.net"
                }
            ],
            "description": "swagger-php - Generate interactive documentation for your RESTful API using phpdoc annotations",
            "homepage": "https://github.com/zircote/swagger-php/",
            "keywords": [
                "api",
                "json",
                "rest",
                "service discovery"
            ],
            "support": {
                "issues": "https://github.com/zircote/swagger-php/issues",
                "source": "https://github.com/zircote/swagger-php/tree/3.3.7"
            },
            "time": "2023-01-03T21:17:10+00:00"
        }
    ],
    "packages-dev": [
        {
            "name": "behat/behat",
            "version": "v3.22.0",
            "source": {
                "type": "git",
                "url": "https://github.com/Behat/Behat.git",
                "reference": "a93098a77753c3cfdc4c485d75141924a78ceb93"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Behat/Behat/zipball/a93098a77753c3cfdc4c485d75141924a78ceb93",
                "reference": "a93098a77753c3cfdc4c485d75141924a78ceb93",
                "shasum": ""
            },
            "require": {
                "behat/gherkin": "^4.12.0",
                "composer-runtime-api": "^2.2",
                "composer/xdebug-handler": "^3.0",
                "ext-mbstring": "*",
                "nikic/php-parser": "^5.2",
                "php": "8.1.* || 8.2.* || 8.3.* || 8.4.* ",
                "psr/container": "^1.0 || ^2.0",
                "symfony/config": "^5.4 || ^6.4 || ^7.0",
                "symfony/console": "^5.4 || ^6.4 || ^7.0",
                "symfony/dependency-injection": "^5.4 || ^6.4 || ^7.0",
                "symfony/event-dispatcher": "^5.4 || ^6.4 || ^7.0",
                "symfony/translation": "^5.4 || ^6.4 || ^7.0",
                "symfony/yaml": "^5.4 || ^6.4 || ^7.0"
            },
            "require-dev": {
                "friendsofphp/php-cs-fixer": "^3.68",
                "phpstan/phpstan": "^2.0",
                "phpunit/phpunit": "^9.6",
                "sebastian/diff": "^4.0",
                "symfony/polyfill-php84": "^1.31",
                "symfony/process": "^5.4 || ^6.4 || ^7.0"
            },
            "suggest": {
                "ext-dom": "Needed to output test results in JUnit format."
            },
            "bin": [
                "bin/behat"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Behat\\Hook\\": "src/Behat/Hook/",
                    "Behat\\Step\\": "src/Behat/Step/",
                    "Behat\\Behat\\": "src/Behat/Behat/",
                    "Behat\\Config\\": "src/Behat/Config/",
                    "Behat\\Testwork\\": "src/Behat/Testwork/",
                    "Behat\\Transformation\\": "src/Behat/Transformation/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Konstantin Kudryashov",
                    "email": "ever.zet@gmail.com",
                    "homepage": "http://everzet.com"
                }
            ],
            "description": "Scenario-oriented BDD framework for PHP",
            "homepage": "https://behat.org/",
            "keywords": [
                "Agile",
                "BDD",
                "ScenarioBDD",
                "Scrum",
                "StoryBDD",
                "User story",
                "business",
                "development",
                "documentation",
                "examples",
                "symfony",
                "testing"
            ],
            "support": {
                "issues": "https://github.com/Behat/Behat/issues",
                "source": "https://github.com/Behat/Behat/tree/v3.22.0"
            },
            "time": "2025-05-06T15:25:03+00:00"
        },
        {
            "name": "behat/gherkin",
            "version": "v4.14.0",
            "source": {
                "type": "git",
                "url": "https://github.com/Behat/Gherkin.git",
                "reference": "34c9b59c59355a7b4c53b9f041c8dbd1c8acc3b4"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/Behat/Gherkin/zipball/34c9b59c59355a7b4c53b9f041c8dbd1c8acc3b4",
                "reference": "34c9b59c59355a7b4c53b9f041c8dbd1c8acc3b4",
                "shasum": ""
            },
            "require": {
                "composer-runtime-api": "^2.2",
                "php": "8.1.* || 8.2.* || 8.3.* || 8.4.*"
            },
            "require-dev": {
                "cucumber/gherkin-monorepo": "dev-gherkin-v32.1.1",
                "friendsofphp/php-cs-fixer": "^3.65",
                "mikey179/vfsstream": "^1.6",
                "phpstan/extension-installer": "^1",
                "phpstan/phpstan": "^2",
                "phpstan/phpstan-phpunit": "^2",
                "phpunit/phpunit": "^10.5",
                "symfony/yaml": "^5.4 || ^6.4 || ^7.0"
            },
            "suggest": {
                "symfony/yaml": "If you want to parse features, represented in YAML files"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Behat\\Gherkin\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Konstantin Kudryashov",
                    "email": "ever.zet@gmail.com",
                    "homepage": "https://everzet.com"
                }
            ],
            "description": "Gherkin DSL parser for PHP",
            "homepage": "https://behat.org/",
            "keywords": [
                "BDD",
                "Behat",
                "Cucumber",
                "DSL",
                "gherkin",
                "parser"
            ],
            "support": {
                "issues": "https://github.com/Behat/Gherkin/issues",
                "source": "https://github.com/Behat/Gherkin/tree/v4.14.0"
            },
            "time": "2025-05-23T15:06:40+00:00"
        },
        {
            "name": "clue/ndjson-react",
            "version": "v1.3.0",
            "source": {
                "type": "git",
                "url": "https://github.com/clue/reactphp-ndjson.git",
                "reference": "392dc165fce93b5bb5c637b67e59619223c931b0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/clue/reactphp-ndjson/zipball/392dc165fce93b5bb5c637b67e59619223c931b0",
                "reference": "392dc165fce93b5bb5c637b67e59619223c931b0",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3",
                "react/stream": "^1.2"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.5 || ^5.7 || ^4.8.35",
                "react/event-loop": "^1.2"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Clue\\React\\NDJson\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Christian Lück",
                    "email": "christian@clue.engineering"
                }
            ],
            "description": "Streaming newline-delimited JSON (NDJSON) parser and encoder for ReactPHP.",
            "homepage": "https://github.com/clue/reactphp-ndjson",
            "keywords": [
                "NDJSON",
                "json",
                "jsonlines",
                "newline",
                "reactphp",
                "streaming"
            ],
            "support": {
                "issues": "https://github.com/clue/reactphp-ndjson/issues",
                "source": "https://github.com/clue/reactphp-ndjson/tree/v1.3.0"
            },
            "funding": [
                {
                    "url": "https://clue.engineering/support",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/clue",
                    "type": "github"
                }
            ],
            "time": "2022-12-23T10:58:28+00:00"
        },
        {
            "name": "composer/pcre",
            "version": "3.3.2",
            "source": {
                "type": "git",
                "url": "https://github.com/composer/pcre.git",
                "reference": "b2bed4734f0cc156ee1fe9c0da2550420d99a21e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/composer/pcre/zipball/b2bed4734f0cc156ee1fe9c0da2550420d99a21e",
                "reference": "b2bed4734f0cc156ee1fe9c0da2550420d99a21e",
                "shasum": ""
            },
            "require": {
                "php": "^7.4 || ^8.0"
            },
            "conflict": {
                "phpstan/phpstan": "<1.11.10"
            },
            "require-dev": {
                "phpstan/phpstan": "^1.12 || ^2",
                "phpstan/phpstan-strict-rules": "^1 || ^2",
                "phpunit/phpunit": "^8 || ^9"
            },
            "type": "library",
            "extra": {
                "phpstan": {
                    "includes": [
                        "extension.neon"
                    ]
                },
                "branch-alias": {
                    "dev-main": "3.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Composer\\Pcre\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Jordi Boggiano",
                    "email": "j.boggiano@seld.be",
                    "homepage": "http://seld.be"
                }
            ],
            "description": "PCRE wrapping library that offers type-safe preg_* replacements.",
            "keywords": [
                "PCRE",
                "preg",
                "regex",
                "regular expression"
            ],
            "support": {
                "issues": "https://github.com/composer/pcre/issues",
                "source": "https://github.com/composer/pcre/tree/3.3.2"
            },
            "funding": [
                {
                    "url": "https://packagist.com",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/composer",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/composer/composer",
                    "type": "tidelift"
                }
            ],
            "time": "2024-11-12T16:29:46+00:00"
        },
        {
            "name": "composer/semver",
            "version": "3.4.3",
            "source": {
                "type": "git",
                "url": "https://github.com/composer/semver.git",
                "reference": "4313d26ada5e0c4edfbd1dc481a92ff7bff91f12"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/composer/semver/zipball/4313d26ada5e0c4edfbd1dc481a92ff7bff91f12",
                "reference": "4313d26ada5e0c4edfbd1dc481a92ff7bff91f12",
                "shasum": ""
            },
            "require": {
                "php": "^5.3.2 || ^7.0 || ^8.0"
            },
            "require-dev": {
                "phpstan/phpstan": "^1.11",
                "symfony/phpunit-bridge": "^3 || ^7"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-main": "3.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "Composer\\Semver\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nils Adermann",
                    "email": "naderman@naderman.de",
                    "homepage": "http://www.naderman.de"
                },
                {
                    "name": "Jordi Boggiano",
                    "email": "j.boggiano@seld.be",
                    "homepage": "http://seld.be"
                },
                {
                    "name": "Rob Bast",
                    "email": "rob.bast@gmail.com",
                    "homepage": "http://robbast.nl"
                }
            ],
            "description": "Semver library that offers utilities, version constraint parsing and validation.",
            "keywords": [
                "semantic",
                "semver",
                "validation",
                "versioning"
            ],
            "support": {
                "irc": "ircs://irc.libera.chat:6697/composer",
                "issues": "https://github.com/composer/semver/issues",
                "source": "https://github.com/composer/semver/tree/3.4.3"
            },
            "funding": [
                {
                    "url": "https://packagist.com",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/composer",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/composer/composer",
                    "type": "tidelift"
                }
            ],
            "time": "2024-09-19T14:15:21+00:00"
        },
        {
            "name": "composer/xdebug-handler",
            "version": "3.0.5",
            "source": {
                "type": "git",
                "url": "https://github.com/composer/xdebug-handler.git",
                "reference": "6c1925561632e83d60a44492e0b344cf48ab85ef"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/composer/xdebug-handler/zipball/6c1925561632e83d60a44492e0b344cf48ab85ef",
                "reference": "6c1925561632e83d60a44492e0b344cf48ab85ef",
                "shasum": ""
            },
            "require": {
                "composer/pcre": "^1 || ^2 || ^3",
                "php": "^7.2.5 || ^8.0",
                "psr/log": "^1 || ^2 || ^3"
            },
            "require-dev": {
                "phpstan/phpstan": "^1.0",
                "phpstan/phpstan-strict-rules": "^1.1",
                "phpunit/phpunit": "^8.5 || ^9.6 || ^10.5"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Composer\\XdebugHandler\\": "src"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "John Stevenson",
                    "email": "john-stevenson@blueyonder.co.uk"
                }
            ],
            "description": "Restarts a process without Xdebug.",
            "keywords": [
                "Xdebug",
                "performance"
            ],
            "support": {
                "irc": "ircs://irc.libera.chat:6697/composer",
                "issues": "https://github.com/composer/xdebug-handler/issues",
                "source": "https://github.com/composer/xdebug-handler/tree/3.0.5"
            },
            "funding": [
                {
                    "url": "https://packagist.com",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/composer",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/composer/composer",
                    "type": "tidelift"
                }
            ],
            "time": "2024-05-06T16:37:16+00:00"
        },
        {
            "name": "dealerdirect/phpcodesniffer-composer-installer",
            "version": "v1.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/PHPCSStandards/composer-installer.git",
                "reference": "4be43904336affa5c2f70744a348312336afd0da"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/PHPCSStandards/composer-installer/zipball/4be43904336affa5c2f70744a348312336afd0da",
                "reference": "4be43904336affa5c2f70744a348312336afd0da",
                "shasum": ""
            },
            "require": {
                "composer-plugin-api": "^1.0 || ^2.0",
                "php": ">=5.4",
                "squizlabs/php_codesniffer": "^2.0 || ^3.1.0 || ^4.0"
            },
            "require-dev": {
                "composer/composer": "*",
                "ext-json": "*",
                "ext-zip": "*",
                "php-parallel-lint/php-parallel-lint": "^1.3.1",
                "phpcompatibility/php-compatibility": "^9.0",
                "yoast/phpunit-polyfills": "^1.0"
            },
            "type": "composer-plugin",
            "extra": {
                "class": "PHPCSStandards\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\Plugin"
            },
            "autoload": {
                "psr-4": {
                    "PHPCSStandards\\Composer\\Plugin\\Installers\\PHPCodeSniffer\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Franck Nijhof",
                    "email": "franck.nijhof@dealerdirect.com",
                    "homepage": "http://www.frenck.nl",
                    "role": "Developer / IT Manager"
                },
                {
                    "name": "Contributors",
                    "homepage": "https://github.com/PHPCSStandards/composer-installer/graphs/contributors"
                }
            ],
            "description": "PHP_CodeSniffer Standards Composer Installer Plugin",
            "homepage": "http://www.dealerdirect.com",
            "keywords": [
                "PHPCodeSniffer",
                "PHP_CodeSniffer",
                "code quality",
                "codesniffer",
                "composer",
                "installer",
                "phpcbf",
                "phpcs",
                "plugin",
                "qa",
                "quality",
                "standard",
                "standards",
                "style guide",
                "stylecheck",
                "tests"
            ],
            "support": {
                "issues": "https://github.com/PHPCSStandards/composer-installer/issues",
                "source": "https://github.com/PHPCSStandards/composer-installer"
            },
            "time": "2023-01-05T11:28:13+00:00"
        },
        {
            "name": "doctrine/instantiator",
            "version": "2.0.0",
            "source": {
                "type": "git",
                "url": "https://github.com/doctrine/instantiator.git",
                "reference": "c6222283fa3f4ac679f8b9ced9a4e23f163e80d0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/doctrine/instantiator/zipball/c6222283fa3f4ac679f8b9ced9a4e23f163e80d0",
                "reference": "c6222283fa3f4ac679f8b9ced9a4e23f163e80d0",
                "shasum": ""
            },
            "require": {
                "php": "^8.1"
            },
            "require-dev": {
                "doctrine/coding-standard": "^11",
                "ext-pdo": "*",
                "ext-phar": "*",
                "phpbench/phpbench": "^1.2",
                "phpstan/phpstan": "^1.9.4",
                "phpstan/phpstan-phpunit": "^1.3",
                "phpunit/phpunit": "^9.5.27",
                "vimeo/psalm": "^5.4"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Doctrine\\Instantiator\\": "src/Doctrine/Instantiator/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Marco Pivetta",
                    "email": "ocramius@gmail.com",
                    "homepage": "https://ocramius.github.io/"
                }
            ],
            "description": "A small, lightweight utility to instantiate objects in PHP without invoking their constructors",
            "homepage": "https://www.doctrine-project.org/projects/instantiator.html",
            "keywords": [
                "constructor",
                "instantiate"
            ],
            "support": {
                "issues": "https://github.com/doctrine/instantiator/issues",
                "source": "https://github.com/doctrine/instantiator/tree/2.0.0"
            },
            "funding": [
                {
                    "url": "https://www.doctrine-project.org/sponsorship.html",
                    "type": "custom"
                },
                {
                    "url": "https://www.patreon.com/phpdoctrine",
                    "type": "patreon"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/doctrine%2Finstantiator",
                    "type": "tidelift"
                }
            ],
            "time": "2022-12-30T00:23:10+00:00"
        },
        {
            "name": "evenement/evenement",
            "version": "v3.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/igorw/evenement.git",
                "reference": "0a16b0d71ab13284339abb99d9d2bd813640efbc"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/igorw/evenement/zipball/0a16b0d71ab13284339abb99d9d2bd813640efbc",
                "reference": "0a16b0d71ab13284339abb99d9d2bd813640efbc",
                "shasum": ""
            },
            "require": {
                "php": ">=7.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^9 || ^6"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Evenement\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Igor Wiedler",
                    "email": "igor@wiedler.ch"
                }
            ],
            "description": "Événement is a very simple event dispatching library for PHP",
            "keywords": [
                "event-dispatcher",
                "event-emitter"
            ],
            "support": {
                "issues": "https://github.com/igorw/evenement/issues",
                "source": "https://github.com/igorw/evenement/tree/v3.0.2"
            },
            "time": "2023-08-08T05:53:35+00:00"
        },
        {
            "name": "fidry/cpu-core-counter",
            "version": "1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/theofidry/cpu-core-counter.git",
                "reference": "8520451a140d3f46ac33042715115e290cf5785f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/theofidry/cpu-core-counter/zipball/8520451a140d3f46ac33042715115e290cf5785f",
                "reference": "8520451a140d3f46ac33042715115e290cf5785f",
                "shasum": ""
            },
            "require": {
                "php": "^7.2 || ^8.0"
            },
            "require-dev": {
                "fidry/makefile": "^0.2.0",
                "fidry/php-cs-fixer-config": "^1.1.2",
                "phpstan/extension-installer": "^1.2.0",
                "phpstan/phpstan": "^1.9.2",
                "phpstan/phpstan-deprecation-rules": "^1.0.0",
                "phpstan/phpstan-phpunit": "^1.2.2",
                "phpstan/phpstan-strict-rules": "^1.4.4",
                "phpunit/phpunit": "^8.5.31 || ^9.5.26",
                "webmozarts/strict-phpunit": "^7.5"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Fidry\\CpuCoreCounter\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Théo FIDRY",
                    "email": "theo.fidry@gmail.com"
                }
            ],
            "description": "Tiny utility to get the number of CPU cores.",
            "keywords": [
                "CPU",
                "core"
            ],
            "support": {
                "issues": "https://github.com/theofidry/cpu-core-counter/issues",
                "source": "https://github.com/theofidry/cpu-core-counter/tree/1.2.0"
            },
            "funding": [
                {
                    "url": "https://github.com/theofidry",
                    "type": "github"
                }
            ],
            "time": "2024-08-06T10:04:20+00:00"
        },
        {
            "name": "friendsofphp/php-cs-fixer",
            "version": "v3.75.0",
            "source": {
                "type": "git",
                "url": "https://github.com/PHP-CS-Fixer/PHP-CS-Fixer.git",
                "reference": "399a128ff2fdaf4281e4e79b755693286cdf325c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/PHP-CS-Fixer/PHP-CS-Fixer/zipball/399a128ff2fdaf4281e4e79b755693286cdf325c",
                "reference": "399a128ff2fdaf4281e4e79b755693286cdf325c",
                "shasum": ""
            },
            "require": {
                "clue/ndjson-react": "^1.0",
                "composer/semver": "^3.4",
                "composer/xdebug-handler": "^3.0.3",
                "ext-filter": "*",
                "ext-hash": "*",
                "ext-json": "*",
                "ext-tokenizer": "*",
                "fidry/cpu-core-counter": "^1.2",
                "php": "^7.4 || ^8.0",
                "react/child-process": "^0.6.5",
                "react/event-loop": "^1.0",
                "react/promise": "^2.0 || ^3.0",
                "react/socket": "^1.0",
                "react/stream": "^1.0",
                "sebastian/diff": "^4.0 || ^5.1 || ^6.0 || ^7.0",
                "symfony/console": "^5.4 || ^6.4 || ^7.0",
                "symfony/event-dispatcher": "^5.4 || ^6.4 || ^7.0",
                "symfony/filesystem": "^5.4 || ^6.4 || ^7.0",
                "symfony/finder": "^5.4 || ^6.4 || ^7.0",
                "symfony/options-resolver": "^5.4 || ^6.4 || ^7.0",
                "symfony/polyfill-mbstring": "^1.31",
                "symfony/polyfill-php80": "^1.31",
                "symfony/polyfill-php81": "^1.31",
                "symfony/process": "^5.4 || ^6.4 || ^7.2",
                "symfony/stopwatch": "^5.4 || ^6.4 || ^7.0"
            },
            "require-dev": {
                "facile-it/paraunit": "^1.3.1 || ^2.6",
                "infection/infection": "^0.29.14",
                "justinrainbow/json-schema": "^5.3 || ^6.2",
                "keradus/cli-executor": "^2.1",
                "mikey179/vfsstream": "^1.6.12",
                "php-coveralls/php-coveralls": "^2.7",
                "php-cs-fixer/accessible-object": "^1.1",
                "php-cs-fixer/phpunit-constraint-isidenticalstring": "^1.6",
                "php-cs-fixer/phpunit-constraint-xmlmatchesxsd": "^1.6",
                "phpunit/phpunit": "^9.6.22 || ^10.5.45 || ^11.5.12",
                "symfony/var-dumper": "^5.4.48 || ^6.4.18 || ^7.2.3",
                "symfony/yaml": "^5.4.45 || ^6.4.18 || ^7.2.3"
            },
            "suggest": {
                "ext-dom": "For handling output formats in XML",
                "ext-mbstring": "For handling non-UTF8 characters."
            },
            "bin": [
                "php-cs-fixer"
            ],
            "type": "application",
            "autoload": {
                "psr-4": {
                    "PhpCsFixer\\": "src/"
                },
                "exclude-from-classmap": [
                    "src/Fixer/Internal/*"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Dariusz Rumiński",
                    "email": "dariusz.ruminski@gmail.com"
                }
            ],
            "description": "A tool to automatically fix PHP code style",
            "keywords": [
                "Static code analysis",
                "fixer",
                "standards",
                "static analysis"
            ],
            "support": {
                "issues": "https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/issues",
                "source": "https://github.com/PHP-CS-Fixer/PHP-CS-Fixer/tree/v3.75.0"
            },
            "funding": [
                {
                    "url": "https://github.com/keradus",
                    "type": "github"
                }
            ],
            "time": "2025-03-31T18:40:42+00:00"
        },
        {
            "name": "macopedia/phpstan-magento1",
            "version": "v1.1.0",
            "source": {
                "type": "git",
                "url": "https://github.com/macopedia/phpstan-magento1.git",
                "reference": "01418cc9a536ffbf298fdf7ea3b9fac1f87a0508"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/macopedia/phpstan-magento1/zipball/01418cc9a536ffbf298fdf7ea3b9fac1f87a0508",
                "reference": "01418cc9a536ffbf298fdf7ea3b9fac1f87a0508",
                "shasum": ""
            },
            "require": {
                "php": ">= 7.4",
                "phpstan/phpstan": "^1.12.11 | ^2.0.2"
            },
            "replace": {
                "inviqa/phpstan-magento1": "0.1.5",
                "vianetz/phpstan-magento1": "0.1.5"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "PHPStanMagento1\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Extension for PHPStan to allow analysis of Magento 1 code.",
            "support": {
                "issues": "https://github.com/macopedia/phpstan-magento1/issues",
                "source": "https://github.com/macopedia/phpstan-magento1/tree/v1.1.0"
            },
            "time": "2024-11-19T10:50:38+00:00"
        },
        {
            "name": "magento-ecg/coding-standard",
            "version": "4.5.4",
            "source": {
                "type": "git",
                "url": "https://github.com/magento-ecg/coding-standard.git",
                "reference": "1db1da45447682108c63ea94ce07119a002a6504"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/magento-ecg/coding-standard/zipball/1db1da45447682108c63ea94ce07119a002a6504",
                "reference": "1db1da45447682108c63ea94ce07119a002a6504",
                "shasum": ""
            },
            "require": {
                "php": "^7.1 || ^8.0"
            },
            "type": "phpcodesniffer-standard",
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Magento Expert Consulting Group",
                    "homepage": "http://magentocommerce.com/consulting",
                    "role": "Maintainer"
                }
            ],
            "description": "A set of PHP_CodeSniffer rules and sniffs.",
            "homepage": "https://github.com/magento-ecg/coding-standard",
            "support": {
                "issues": "https://github.com/magento-ecg/coding-standard/issues",
                "source": "https://github.com/magento-ecg/coding-standard/tree/v4.5.2"
            },
            "time": "2023-07-05T15:24:16+00:00"
        },
        {
            "name": "magento/magento-coding-standard",
            "version": "31",
            "source": {
                "type": "git",
                "url": "https://github.com/magento/magento-coding-standard.git",
                "reference": "1172711ea1947d0258adae8d8e0a72669f1c2d99"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/magento/magento-coding-standard/zipball/1172711ea1947d0258adae8d8e0a72669f1c2d99",
                "reference": "1172711ea1947d0258adae8d8e0a72669f1c2d99",
                "shasum": ""
            },
            "require": {
                "ext-dom": "*",
                "ext-simplexml": "*",
                "php": ">=7.4",
                "phpcompatibility/php-compatibility": "^9.3",
                "rector/rector": "^0.15.10",
                "squizlabs/php_codesniffer": "^3.6.1",
                "webonyx/graphql-php": "^15.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.5.8"
            },
            "type": "phpcodesniffer-standard",
            "autoload": {
                "psr-4": {
                    "Magento2\\": "Magento2/",
                    "Magento2Framework\\": "Magento2Framework/"
                },
                "classmap": [
                    "PHP_CodeSniffer/Tokenizers/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "OSL-3.0",
                "AFL-3.0"
            ],
            "description": "A set of Magento specific PHP CodeSniffer rules.",
            "support": {
                "issues": "https://github.com/magento/magento-coding-standard/issues",
                "source": "https://github.com/magento/magento-coding-standard/tree/v31"
            },
            "time": "2023-02-01T15:38:47+00:00"
        },
        {
            "name": "nikic/php-parser",
            "version": "v5.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/nikic/PHP-Parser.git",
                "reference": "ae59794362fe85e051a58ad36b289443f57be7a9"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/nikic/PHP-Parser/zipball/ae59794362fe85e051a58ad36b289443f57be7a9",
                "reference": "ae59794362fe85e051a58ad36b289443f57be7a9",
                "shasum": ""
            },
            "require": {
                "ext-ctype": "*",
                "ext-json": "*",
                "ext-tokenizer": "*",
                "php": ">=7.4"
            },
            "require-dev": {
                "ircmaxell/php-yacc": "^0.0.7",
                "phpunit/phpunit": "^9.0"
            },
            "bin": [
                "bin/php-parse"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.0-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "PhpParser\\": "lib/PhpParser"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Nikita Popov"
                }
            ],
            "description": "A PHP parser written in PHP",
            "keywords": [
                "parser",
                "php"
            ],
            "support": {
                "issues": "https://github.com/nikic/PHP-Parser/issues",
                "source": "https://github.com/nikic/PHP-Parser/tree/v5.5.0"
            },
            "time": "2025-05-31T08:24:38+00:00"
        },
        {
            "name": "pdepend/pdepend",
            "version": "2.16.2",
            "source": {
                "type": "git",
                "url": "https://github.com/pdepend/pdepend.git",
                "reference": "f942b208dc2a0868454d01b29f0c75bbcfc6ed58"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/pdepend/pdepend/zipball/f942b208dc2a0868454d01b29f0c75bbcfc6ed58",
                "reference": "f942b208dc2a0868454d01b29f0c75bbcfc6ed58",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.7",
                "symfony/config": "^2.3.0|^3|^4|^5|^6.0|^7.0",
                "symfony/dependency-injection": "^2.3.0|^3|^4|^5|^6.0|^7.0",
                "symfony/filesystem": "^2.3.0|^3|^4|^5|^6.0|^7.0",
                "symfony/polyfill-mbstring": "^1.19"
            },
            "require-dev": {
                "easy-doc/easy-doc": "0.0.0|^1.2.3",
                "gregwar/rst": "^1.0",
                "squizlabs/php_codesniffer": "^2.0.0"
            },
            "bin": [
                "src/bin/pdepend"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.x-dev"
                }
            },
            "autoload": {
                "psr-4": {
                    "PDepend\\": "src/main/php/PDepend"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "description": "Official version of pdepend to be handled with Composer",
            "keywords": [
                "PHP Depend",
                "PHP_Depend",
                "dev",
                "pdepend"
            ],
            "support": {
                "issues": "https://github.com/pdepend/pdepend/issues",
                "source": "https://github.com/pdepend/pdepend/tree/2.16.2"
            },
            "funding": [
                {
                    "url": "https://tidelift.com/funding/github/packagist/pdepend/pdepend",
                    "type": "tidelift"
                }
            ],
            "time": "2023-12-17T18:09:59+00:00"
        },
        {
            "name": "phar-io/manifest",
            "version": "2.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/phar-io/manifest.git",
                "reference": "54750ef60c58e43759730615a392c31c80e23176"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phar-io/manifest/zipball/54750ef60c58e43759730615a392c31c80e23176",
                "reference": "54750ef60c58e43759730615a392c31c80e23176",
                "shasum": ""
            },
            "require": {
                "ext-dom": "*",
                "ext-libxml": "*",
                "ext-phar": "*",
                "ext-xmlwriter": "*",
                "phar-io/version": "^3.0.1",
                "php": "^7.2 || ^8.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Arne Blankerts",
                    "email": "arne@blankerts.de",
                    "role": "Developer"
                },
                {
                    "name": "Sebastian Heuer",
                    "email": "sebastian@phpeople.de",
                    "role": "Developer"
                },
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "Developer"
                }
            ],
            "description": "Component for reading phar.io manifest information from a PHP Archive (PHAR)",
            "support": {
                "issues": "https://github.com/phar-io/manifest/issues",
                "source": "https://github.com/phar-io/manifest/tree/2.0.4"
            },
            "funding": [
                {
                    "url": "https://github.com/theseer",
                    "type": "github"
                }
            ],
            "time": "2024-03-03T12:33:53+00:00"
        },
        {
            "name": "phar-io/version",
            "version": "3.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/phar-io/version.git",
                "reference": "4f7fd7836c6f332bb2933569e566a0d6c4cbed74"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phar-io/version/zipball/4f7fd7836c6f332bb2933569e566a0d6c4cbed74",
                "reference": "4f7fd7836c6f332bb2933569e566a0d6c4cbed74",
                "shasum": ""
            },
            "require": {
                "php": "^7.2 || ^8.0"
            },
            "type": "library",
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Arne Blankerts",
                    "email": "arne@blankerts.de",
                    "role": "Developer"
                },
                {
                    "name": "Sebastian Heuer",
                    "email": "sebastian@phpeople.de",
                    "role": "Developer"
                },
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "Developer"
                }
            ],
            "description": "Library for handling version information and constraints",
            "support": {
                "issues": "https://github.com/phar-io/version/issues",
                "source": "https://github.com/phar-io/version/tree/3.2.1"
            },
            "time": "2022-02-21T01:04:05+00:00"
        },
        {
            "name": "phpcompatibility/php-compatibility",
            "version": "9.3.5",
            "source": {
                "type": "git",
                "url": "https://github.com/PHPCompatibility/PHPCompatibility.git",
                "reference": "9fb324479acf6f39452e0655d2429cc0d3914243"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/PHPCompatibility/PHPCompatibility/zipball/9fb324479acf6f39452e0655d2429cc0d3914243",
                "reference": "9fb324479acf6f39452e0655d2429cc0d3914243",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3",
                "squizlabs/php_codesniffer": "^2.3 || ^3.0.2"
            },
            "conflict": {
                "squizlabs/php_codesniffer": "2.6.2"
            },
            "require-dev": {
                "phpunit/phpunit": "~4.5 || ^5.0 || ^6.0 || ^7.0"
            },
            "suggest": {
                "dealerdirect/phpcodesniffer-composer-installer": "^0.5 || This Composer plugin will sort out the PHPCS 'installed_paths' automatically.",
                "roave/security-advisories": "dev-master || Helps prevent installing dependencies with known security issues."
            },
            "type": "phpcodesniffer-standard",
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "LGPL-3.0-or-later"
            ],
            "authors": [
                {
                    "name": "Wim Godden",
                    "homepage": "https://github.com/wimg",
                    "role": "lead"
                },
                {
                    "name": "Juliette Reinders Folmer",
                    "homepage": "https://github.com/jrfnl",
                    "role": "lead"
                },
                {
                    "name": "Contributors",
                    "homepage": "https://github.com/PHPCompatibility/PHPCompatibility/graphs/contributors"
                }
            ],
            "description": "A set of sniffs for PHP_CodeSniffer that checks for PHP cross-version compatibility.",
            "homepage": "http://techblog.wimgodden.be/tag/codesniffer/",
            "keywords": [
                "compatibility",
                "phpcs",
                "standards"
            ],
            "support": {
                "issues": "https://github.com/PHPCompatibility/PHPCompatibility/issues",
                "source": "https://github.com/PHPCompatibility/PHPCompatibility"
            },
            "time": "2019-12-27T09:44:58+00:00"
        },
        {
            "name": "phpmd/phpmd",
            "version": "2.15.0",
            "source": {
                "type": "git",
                "url": "https://github.com/phpmd/phpmd.git",
                "reference": "74a1f56e33afad4128b886e334093e98e1b5e7c0"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phpmd/phpmd/zipball/74a1f56e33afad4128b886e334093e98e1b5e7c0",
                "reference": "74a1f56e33afad4128b886e334093e98e1b5e7c0",
                "shasum": ""
            },
            "require": {
                "composer/xdebug-handler": "^1.0 || ^2.0 || ^3.0",
                "ext-xml": "*",
                "pdepend/pdepend": "^2.16.1",
                "php": ">=5.3.9"
            },
            "require-dev": {
                "easy-doc/easy-doc": "0.0.0 || ^1.3.2",
                "ext-json": "*",
                "ext-simplexml": "*",
                "gregwar/rst": "^1.0",
                "mikey179/vfsstream": "^1.6.8",
                "squizlabs/php_codesniffer": "^2.9.2 || ^3.7.2"
            },
            "bin": [
                "src/bin/phpmd"
            ],
            "type": "library",
            "autoload": {
                "psr-0": {
                    "PHPMD\\": "src/main/php"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Manuel Pichler",
                    "email": "github@manuel-pichler.de",
                    "homepage": "https://github.com/manuelpichler",
                    "role": "Project Founder"
                },
                {
                    "name": "Marc Würth",
                    "email": "ravage@bluewin.ch",
                    "homepage": "https://github.com/ravage84",
                    "role": "Project Maintainer"
                },
                {
                    "name": "Other contributors",
                    "homepage": "https://github.com/phpmd/phpmd/graphs/contributors",
                    "role": "Contributors"
                }
            ],
            "description": "PHPMD is a spin-off project of PHP Depend and aims to be a PHP equivalent of the well known Java tool PMD.",
            "homepage": "https://phpmd.org/",
            "keywords": [
                "dev",
                "mess detection",
                "mess detector",
                "pdepend",
                "phpmd",
                "pmd"
            ],
            "support": {
                "irc": "irc://irc.freenode.org/phpmd",
                "issues": "https://github.com/phpmd/phpmd/issues",
                "source": "https://github.com/phpmd/phpmd/tree/2.15.0"
            },
            "funding": [
                {
                    "url": "https://tidelift.com/funding/github/packagist/phpmd/phpmd",
                    "type": "tidelift"
                }
            ],
            "time": "2023-12-11T08:22:20+00:00"
        },
        {
            "name": "phpstan/phpstan",
            "version": "1.12.27",
            "source": {
                "type": "git",
                "url": "https://github.com/phpstan/phpstan.git",
                "reference": "3a6e423c076ab39dfedc307e2ac627ef579db162"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/phpstan/phpstan/zipball/3a6e423c076ab39dfedc307e2ac627ef579db162",
                "reference": "3a6e423c076ab39dfedc307e2ac627ef579db162",
                "shasum": ""
            },
            "require": {
                "php": "^7.2|^8.0"
            },
            "conflict": {
                "phpstan/phpstan-shim": "*"
            },
            "bin": [
                "phpstan",
                "phpstan.phar"
            ],
            "type": "library",
            "autoload": {
                "files": [
                    "bootstrap.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "PHPStan - PHP Static Analysis Tool",
            "keywords": [
                "dev",
                "static analysis"
            ],
            "support": {
                "docs": "https://phpstan.org/user-guide/getting-started",
                "forum": "https://github.com/phpstan/phpstan/discussions",
                "issues": "https://github.com/phpstan/phpstan/issues",
                "security": "https://github.com/phpstan/phpstan/security/policy",
                "source": "https://github.com/phpstan/phpstan-src"
            },
            "funding": [
                {
                    "url": "https://github.com/ondrejmirtes",
                    "type": "github"
                },
                {
                    "url": "https://github.com/phpstan",
                    "type": "github"
                }
            ],
            "time": "2025-05-21T20:51:45+00:00"
        },
        {
            "name": "phpunit/php-code-coverage",
            "version": "9.2.32",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/php-code-coverage.git",
                "reference": "85402a822d1ecf1db1096959413d35e1c37cf1a5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/php-code-coverage/zipball/85402a822d1ecf1db1096959413d35e1c37cf1a5",
                "reference": "85402a822d1ecf1db1096959413d35e1c37cf1a5",
                "shasum": ""
            },
            "require": {
                "ext-dom": "*",
                "ext-libxml": "*",
                "ext-xmlwriter": "*",
                "nikic/php-parser": "^4.19.1 || ^5.1.0",
                "php": ">=7.3",
                "phpunit/php-file-iterator": "^3.0.6",
                "phpunit/php-text-template": "^2.0.4",
                "sebastian/code-unit-reverse-lookup": "^2.0.3",
                "sebastian/complexity": "^2.0.3",
                "sebastian/environment": "^5.1.5",
                "sebastian/lines-of-code": "^1.0.4",
                "sebastian/version": "^3.0.2",
                "theseer/tokenizer": "^1.2.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.6"
            },
            "suggest": {
                "ext-pcov": "PHP extension that provides line coverage",
                "ext-xdebug": "PHP extension that provides line coverage as well as branch and path coverage"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-main": "9.2.x-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "Library that provides collection, processing, and rendering functionality for PHP code coverage information.",
            "homepage": "https://github.com/sebastianbergmann/php-code-coverage",
            "keywords": [
                "coverage",
                "testing",
                "xunit"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/php-code-coverage/issues",
                "security": "https://github.com/sebastianbergmann/php-code-coverage/security/policy",
                "source": "https://github.com/sebastianbergmann/php-code-coverage/tree/9.2.32"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2024-08-22T04:23:01+00:00"
        },
        {
            "name": "phpunit/php-file-iterator",
            "version": "3.0.6",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/php-file-iterator.git",
                "reference": "cf1c2e7c203ac650e352f4cc675a7021e7d1b3cf"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/php-file-iterator/zipball/cf1c2e7c203ac650e352f4cc675a7021e7d1b3cf",
                "reference": "cf1c2e7c203ac650e352f4cc675a7021e7d1b3cf",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "FilterIterator implementation that filters files based on a list of suffixes.",
            "homepage": "https://github.com/sebastianbergmann/php-file-iterator/",
            "keywords": [
                "filesystem",
                "iterator"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/php-file-iterator/issues",
                "source": "https://github.com/sebastianbergmann/php-file-iterator/tree/3.0.6"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2021-12-02T12:48:52+00:00"
        },
        {
            "name": "phpunit/php-invoker",
            "version": "3.1.1",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/php-invoker.git",
                "reference": "5a10147d0aaf65b58940a0b72f71c9ac0423cc67"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/php-invoker/zipball/5a10147d0aaf65b58940a0b72f71c9ac0423cc67",
                "reference": "5a10147d0aaf65b58940a0b72f71c9ac0423cc67",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "ext-pcntl": "*",
                "phpunit/phpunit": "^9.3"
            },
            "suggest": {
                "ext-pcntl": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.1-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "Invoke callables with a timeout",
            "homepage": "https://github.com/sebastianbergmann/php-invoker/",
            "keywords": [
                "process"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/php-invoker/issues",
                "source": "https://github.com/sebastianbergmann/php-invoker/tree/3.1.1"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2020-09-28T05:58:55+00:00"
        },
        {
            "name": "phpunit/php-text-template",
            "version": "2.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/php-text-template.git",
                "reference": "5da5f67fc95621df9ff4c4e5a84d6a8a2acf7c28"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/php-text-template/zipball/5da5f67fc95621df9ff4c4e5a84d6a8a2acf7c28",
                "reference": "5da5f67fc95621df9ff4c4e5a84d6a8a2acf7c28",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "Simple template engine.",
            "homepage": "https://github.com/sebastianbergmann/php-text-template/",
            "keywords": [
                "template"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/php-text-template/issues",
                "source": "https://github.com/sebastianbergmann/php-text-template/tree/2.0.4"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2020-10-26T05:33:50+00:00"
        },
        {
            "name": "phpunit/php-timer",
            "version": "5.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/php-timer.git",
                "reference": "5a63ce20ed1b5bf577850e2c4e87f4aa902afbd2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/php-timer/zipball/5a63ce20ed1b5bf577850e2c4e87f4aa902afbd2",
                "reference": "5a63ce20ed1b5bf577850e2c4e87f4aa902afbd2",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "Utility class for timing",
            "homepage": "https://github.com/sebastianbergmann/php-timer/",
            "keywords": [
                "timer"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/php-timer/issues",
                "source": "https://github.com/sebastianbergmann/php-timer/tree/5.0.3"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2020-10-26T13:16:10+00:00"
        },
        {
            "name": "phpunit/phpunit",
            "version": "9.6.23",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/phpunit.git",
                "reference": "43d2cb18d0675c38bd44982a5d1d88f6d53d8d95"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/phpunit/zipball/43d2cb18d0675c38bd44982a5d1d88f6d53d8d95",
                "reference": "43d2cb18d0675c38bd44982a5d1d88f6d53d8d95",
                "shasum": ""
            },
            "require": {
                "doctrine/instantiator": "^1.5.0 || ^2",
                "ext-dom": "*",
                "ext-json": "*",
                "ext-libxml": "*",
                "ext-mbstring": "*",
                "ext-xml": "*",
                "ext-xmlwriter": "*",
                "myclabs/deep-copy": "^1.13.1",
                "phar-io/manifest": "^2.0.4",
                "phar-io/version": "^3.2.1",
                "php": ">=7.3",
                "phpunit/php-code-coverage": "^9.2.32",
                "phpunit/php-file-iterator": "^3.0.6",
                "phpunit/php-invoker": "^3.1.1",
                "phpunit/php-text-template": "^2.0.4",
                "phpunit/php-timer": "^5.0.3",
                "sebastian/cli-parser": "^1.0.2",
                "sebastian/code-unit": "^1.0.8",
                "sebastian/comparator": "^4.0.8",
                "sebastian/diff": "^4.0.6",
                "sebastian/environment": "^5.1.5",
                "sebastian/exporter": "^4.0.6",
                "sebastian/global-state": "^5.0.7",
                "sebastian/object-enumerator": "^4.0.4",
                "sebastian/resource-operations": "^3.0.4",
                "sebastian/type": "^3.2.1",
                "sebastian/version": "^3.0.2"
            },
            "suggest": {
                "ext-soap": "To be able to generate mocks based on WSDL files",
                "ext-xdebug": "PHP extension that provides line coverage as well as branch and path coverage"
            },
            "bin": [
                "phpunit"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "9.6-dev"
                }
            },
            "autoload": {
                "files": [
                    "src/Framework/Assert/Functions.php"
                ],
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "The PHP Unit Testing framework.",
            "homepage": "https://phpunit.de/",
            "keywords": [
                "phpunit",
                "testing",
                "xunit"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/phpunit/issues",
                "security": "https://github.com/sebastianbergmann/phpunit/security/policy",
                "source": "https://github.com/sebastianbergmann/phpunit/tree/9.6.23"
            },
            "funding": [
                {
                    "url": "https://phpunit.de/sponsors.html",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                },
                {
                    "url": "https://liberapay.com/sebastianbergmann",
                    "type": "liberapay"
                },
                {
                    "url": "https://thanks.dev/u/gh/sebastianbergmann",
                    "type": "thanks_dev"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/phpunit/phpunit",
                    "type": "tidelift"
                }
            ],
            "time": "2025-05-02T06:40:34+00:00"
        },
        {
            "name": "react/cache",
            "version": "v1.2.0",
            "source": {
                "type": "git",
                "url": "https://github.com/reactphp/cache.git",
                "reference": "d47c472b64aa5608225f47965a484b75c7817d5b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/reactphp/cache/zipball/d47c472b64aa5608225f47965a484b75c7817d5b",
                "reference": "d47c472b64aa5608225f47965a484b75c7817d5b",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.0",
                "react/promise": "^3.0 || ^2.0 || ^1.1"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.5 || ^5.7 || ^4.8.35"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "React\\Cache\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Christian Lück",
                    "email": "christian@clue.engineering",
                    "homepage": "https://clue.engineering/"
                },
                {
                    "name": "Cees-Jan Kiewiet",
                    "email": "reactphp@ceesjankiewiet.nl",
                    "homepage": "https://wyrihaximus.net/"
                },
                {
                    "name": "Jan Sorgalla",
                    "email": "jsorgalla@gmail.com",
                    "homepage": "https://sorgalla.com/"
                },
                {
                    "name": "Chris Boden",
                    "email": "cboden@gmail.com",
                    "homepage": "https://cboden.dev/"
                }
            ],
            "description": "Async, Promise-based cache interface for ReactPHP",
            "keywords": [
                "cache",
                "caching",
                "promise",
                "reactphp"
            ],
            "support": {
                "issues": "https://github.com/reactphp/cache/issues",
                "source": "https://github.com/reactphp/cache/tree/v1.2.0"
            },
            "funding": [
                {
                    "url": "https://opencollective.com/reactphp",
                    "type": "open_collective"
                }
            ],
            "time": "2022-11-30T15:59:55+00:00"
        },
        {
            "name": "react/child-process",
            "version": "v0.6.6",
            "source": {
                "type": "git",
                "url": "https://github.com/reactphp/child-process.git",
                "reference": "1721e2b93d89b745664353b9cfc8f155ba8a6159"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/reactphp/child-process/zipball/1721e2b93d89b745664353b9cfc8f155ba8a6159",
                "reference": "1721e2b93d89b745664353b9cfc8f155ba8a6159",
                "shasum": ""
            },
            "require": {
                "evenement/evenement": "^3.0 || ^2.0 || ^1.0",
                "php": ">=5.3.0",
                "react/event-loop": "^1.2",
                "react/stream": "^1.4"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.6 || ^5.7 || ^4.8.36",
                "react/socket": "^1.16",
                "sebastian/environment": "^5.0 || ^3.0 || ^2.0 || ^1.0"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "React\\ChildProcess\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Christian Lück",
                    "email": "christian@clue.engineering",
                    "homepage": "https://clue.engineering/"
                },
                {
                    "name": "Cees-Jan Kiewiet",
                    "email": "reactphp@ceesjankiewiet.nl",
                    "homepage": "https://wyrihaximus.net/"
                },
                {
                    "name": "Jan Sorgalla",
                    "email": "jsorgalla@gmail.com",
                    "homepage": "https://sorgalla.com/"
                },
                {
                    "name": "Chris Boden",
                    "email": "cboden@gmail.com",
                    "homepage": "https://cboden.dev/"
                }
            ],
            "description": "Event-driven library for executing child processes with ReactPHP.",
            "keywords": [
                "event-driven",
                "process",
                "reactphp"
            ],
            "support": {
                "issues": "https://github.com/reactphp/child-process/issues",
                "source": "https://github.com/reactphp/child-process/tree/v0.6.6"
            },
            "funding": [
                {
                    "url": "https://opencollective.com/reactphp",
                    "type": "open_collective"
                }
            ],
            "time": "2025-01-01T16:37:48+00:00"
        },
        {
            "name": "react/dns",
            "version": "v1.13.0",
            "source": {
                "type": "git",
                "url": "https://github.com/reactphp/dns.git",
                "reference": "eb8ae001b5a455665c89c1df97f6fb682f8fb0f5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/reactphp/dns/zipball/eb8ae001b5a455665c89c1df97f6fb682f8fb0f5",
                "reference": "eb8ae001b5a455665c89c1df97f6fb682f8fb0f5",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.0",
                "react/cache": "^1.0 || ^0.6 || ^0.5",
                "react/event-loop": "^1.2",
                "react/promise": "^3.2 || ^2.7 || ^1.2.1"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.6 || ^5.7 || ^4.8.36",
                "react/async": "^4.3 || ^3 || ^2",
                "react/promise-timer": "^1.11"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "React\\Dns\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Christian Lück",
                    "email": "christian@clue.engineering",
                    "homepage": "https://clue.engineering/"
                },
                {
                    "name": "Cees-Jan Kiewiet",
                    "email": "reactphp@ceesjankiewiet.nl",
                    "homepage": "https://wyrihaximus.net/"
                },
                {
                    "name": "Jan Sorgalla",
                    "email": "jsorgalla@gmail.com",
                    "homepage": "https://sorgalla.com/"
                },
                {
                    "name": "Chris Boden",
                    "email": "cboden@gmail.com",
                    "homepage": "https://cboden.dev/"
                }
            ],
            "description": "Async DNS resolver for ReactPHP",
            "keywords": [
                "async",
                "dns",
                "dns-resolver",
                "reactphp"
            ],
            "support": {
                "issues": "https://github.com/reactphp/dns/issues",
                "source": "https://github.com/reactphp/dns/tree/v1.13.0"
            },
            "funding": [
                {
                    "url": "https://opencollective.com/reactphp",
                    "type": "open_collective"
                }
            ],
            "time": "2024-06-13T14:18:03+00:00"
        },
        {
            "name": "react/event-loop",
            "version": "v1.5.0",
            "source": {
                "type": "git",
                "url": "https://github.com/reactphp/event-loop.git",
                "reference": "bbe0bd8c51ffc05ee43f1729087ed3bdf7d53354"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/reactphp/event-loop/zipball/bbe0bd8c51ffc05ee43f1729087ed3bdf7d53354",
                "reference": "bbe0bd8c51ffc05ee43f1729087ed3bdf7d53354",
                "shasum": ""
            },
            "require": {
                "php": ">=5.3.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.6 || ^5.7 || ^4.8.36"
            },
            "suggest": {
                "ext-pcntl": "For signal handling support when using the StreamSelectLoop"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "React\\EventLoop\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Christian Lück",
                    "email": "christian@clue.engineering",
                    "homepage": "https://clue.engineering/"
                },
                {
                    "name": "Cees-Jan Kiewiet",
                    "email": "reactphp@ceesjankiewiet.nl",
                    "homepage": "https://wyrihaximus.net/"
                },
                {
                    "name": "Jan Sorgalla",
                    "email": "jsorgalla@gmail.com",
                    "homepage": "https://sorgalla.com/"
                },
                {
                    "name": "Chris Boden",
                    "email": "cboden@gmail.com",
                    "homepage": "https://cboden.dev/"
                }
            ],
            "description": "ReactPHP's core reactor event loop that libraries can use for evented I/O.",
            "keywords": [
                "asynchronous",
                "event-loop"
            ],
            "support": {
                "issues": "https://github.com/reactphp/event-loop/issues",
                "source": "https://github.com/reactphp/event-loop/tree/v1.5.0"
            },
            "funding": [
                {
                    "url": "https://opencollective.com/reactphp",
                    "type": "open_collective"
                }
            ],
            "time": "2023-11-13T13:48:05+00:00"
        },
        {
            "name": "react/socket",
            "version": "v1.16.0",
            "source": {
                "type": "git",
                "url": "https://github.com/reactphp/socket.git",
                "reference": "23e4ff33ea3e160d2d1f59a0e6050e4b0fb0eac1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/reactphp/socket/zipball/23e4ff33ea3e160d2d1f59a0e6050e4b0fb0eac1",
                "reference": "23e4ff33ea3e160d2d1f59a0e6050e4b0fb0eac1",
                "shasum": ""
            },
            "require": {
                "evenement/evenement": "^3.0 || ^2.0 || ^1.0",
                "php": ">=5.3.0",
                "react/dns": "^1.13",
                "react/event-loop": "^1.2",
                "react/promise": "^3.2 || ^2.6 || ^1.2.1",
                "react/stream": "^1.4"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.6 || ^5.7 || ^4.8.36",
                "react/async": "^4.3 || ^3.3 || ^2",
                "react/promise-stream": "^1.4",
                "react/promise-timer": "^1.11"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "React\\Socket\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Christian Lück",
                    "email": "christian@clue.engineering",
                    "homepage": "https://clue.engineering/"
                },
                {
                    "name": "Cees-Jan Kiewiet",
                    "email": "reactphp@ceesjankiewiet.nl",
                    "homepage": "https://wyrihaximus.net/"
                },
                {
                    "name": "Jan Sorgalla",
                    "email": "jsorgalla@gmail.com",
                    "homepage": "https://sorgalla.com/"
                },
                {
                    "name": "Chris Boden",
                    "email": "cboden@gmail.com",
                    "homepage": "https://cboden.dev/"
                }
            ],
            "description": "Async, streaming plaintext TCP/IP and secure TLS socket server and client connections for ReactPHP",
            "keywords": [
                "Connection",
                "Socket",
                "async",
                "reactphp",
                "stream"
            ],
            "support": {
                "issues": "https://github.com/reactphp/socket/issues",
                "source": "https://github.com/reactphp/socket/tree/v1.16.0"
            },
            "funding": [
                {
                    "url": "https://opencollective.com/reactphp",
                    "type": "open_collective"
                }
            ],
            "time": "2024-07-26T10:38:09+00:00"
        },
        {
            "name": "react/stream",
            "version": "v1.4.0",
            "source": {
                "type": "git",
                "url": "https://github.com/reactphp/stream.git",
                "reference": "1e5b0acb8fe55143b5b426817155190eb6f5b18d"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/reactphp/stream/zipball/1e5b0acb8fe55143b5b426817155190eb6f5b18d",
                "reference": "1e5b0acb8fe55143b5b426817155190eb6f5b18d",
                "shasum": ""
            },
            "require": {
                "evenement/evenement": "^3.0 || ^2.0 || ^1.0",
                "php": ">=5.3.8",
                "react/event-loop": "^1.2"
            },
            "require-dev": {
                "clue/stream-filter": "~1.2",
                "phpunit/phpunit": "^9.6 || ^5.7 || ^4.8.36"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "React\\Stream\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Christian Lück",
                    "email": "christian@clue.engineering",
                    "homepage": "https://clue.engineering/"
                },
                {
                    "name": "Cees-Jan Kiewiet",
                    "email": "reactphp@ceesjankiewiet.nl",
                    "homepage": "https://wyrihaximus.net/"
                },
                {
                    "name": "Jan Sorgalla",
                    "email": "jsorgalla@gmail.com",
                    "homepage": "https://sorgalla.com/"
                },
                {
                    "name": "Chris Boden",
                    "email": "cboden@gmail.com",
                    "homepage": "https://cboden.dev/"
                }
            ],
            "description": "Event-driven readable and writable streams for non-blocking I/O in ReactPHP",
            "keywords": [
                "event-driven",
                "io",
                "non-blocking",
                "pipe",
                "reactphp",
                "readable",
                "stream",
                "writable"
            ],
            "support": {
                "issues": "https://github.com/reactphp/stream/issues",
                "source": "https://github.com/reactphp/stream/tree/v1.4.0"
            },
            "funding": [
                {
                    "url": "https://opencollective.com/reactphp",
                    "type": "open_collective"
                }
            ],
            "time": "2024-06-11T12:45:25+00:00"
        },
        {
            "name": "rector/rector",
            "version": "0.15.25",
            "source": {
                "type": "git",
                "url": "https://github.com/rectorphp/rector.git",
                "reference": "015935c7ed9e48a4f5895ba974f337e20a263841"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/rectorphp/rector/zipball/015935c7ed9e48a4f5895ba974f337e20a263841",
                "reference": "015935c7ed9e48a4f5895ba974f337e20a263841",
                "shasum": ""
            },
            "require": {
                "php": "^7.2|^8.0",
                "phpstan/phpstan": "^1.10.14"
            },
            "conflict": {
                "rector/rector-doctrine": "*",
                "rector/rector-downgrade-php": "*",
                "rector/rector-phpunit": "*",
                "rector/rector-symfony": "*"
            },
            "bin": [
                "bin/rector"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-main": "0.15-dev"
                }
            },
            "autoload": {
                "files": [
                    "bootstrap.php"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Instant Upgrade and Automated Refactoring of any PHP code",
            "keywords": [
                "automation",
                "dev",
                "migration",
                "refactoring"
            ],
            "support": {
                "issues": "https://github.com/rectorphp/rector/issues",
                "source": "https://github.com/rectorphp/rector/tree/0.15.25"
            },
            "funding": [
                {
                    "url": "https://github.com/tomasvotruba",
                    "type": "github"
                }
            ],
            "time": "2023-04-20T16:07:39+00:00"
        },
        {
            "name": "sebastian/cli-parser",
            "version": "1.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/cli-parser.git",
                "reference": "2b56bea83a09de3ac06bb18b92f068e60cc6f50b"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/cli-parser/zipball/2b56bea83a09de3ac06bb18b92f068e60cc6f50b",
                "reference": "2b56bea83a09de3ac06bb18b92f068e60cc6f50b",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "Library for parsing CLI options",
            "homepage": "https://github.com/sebastianbergmann/cli-parser",
            "support": {
                "issues": "https://github.com/sebastianbergmann/cli-parser/issues",
                "source": "https://github.com/sebastianbergmann/cli-parser/tree/1.0.2"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2024-03-02T06:27:43+00:00"
        },
        {
            "name": "sebastian/code-unit",
            "version": "1.0.8",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/code-unit.git",
                "reference": "1fc9f64c0927627ef78ba436c9b17d967e68e120"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/code-unit/zipball/1fc9f64c0927627ef78ba436c9b17d967e68e120",
                "reference": "1fc9f64c0927627ef78ba436c9b17d967e68e120",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "Collection of value objects that represent the PHP code units",
            "homepage": "https://github.com/sebastianbergmann/code-unit",
            "support": {
                "issues": "https://github.com/sebastianbergmann/code-unit/issues",
                "source": "https://github.com/sebastianbergmann/code-unit/tree/1.0.8"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2020-10-26T13:08:54+00:00"
        },
        {
            "name": "sebastian/code-unit-reverse-lookup",
            "version": "2.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/code-unit-reverse-lookup.git",
                "reference": "ac91f01ccec49fb77bdc6fd1e548bc70f7faa3e5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/code-unit-reverse-lookup/zipball/ac91f01ccec49fb77bdc6fd1e548bc70f7faa3e5",
                "reference": "ac91f01ccec49fb77bdc6fd1e548bc70f7faa3e5",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                }
            ],
            "description": "Looks up which function or method a line of code belongs to",
            "homepage": "https://github.com/sebastianbergmann/code-unit-reverse-lookup/",
            "support": {
                "issues": "https://github.com/sebastianbergmann/code-unit-reverse-lookup/issues",
                "source": "https://github.com/sebastianbergmann/code-unit-reverse-lookup/tree/2.0.3"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2020-09-28T05:30:19+00:00"
        },
        {
            "name": "sebastian/comparator",
            "version": "4.0.8",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/comparator.git",
                "reference": "fa0f136dd2334583309d32b62544682ee972b51a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/comparator/zipball/fa0f136dd2334583309d32b62544682ee972b51a",
                "reference": "fa0f136dd2334583309d32b62544682ee972b51a",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3",
                "sebastian/diff": "^4.0",
                "sebastian/exporter": "^4.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                },
                {
                    "name": "Jeff Welch",
                    "email": "whatthejeff@gmail.com"
                },
                {
                    "name": "Volker Dusch",
                    "email": "github@wallbash.com"
                },
                {
                    "name": "Bernhard Schussek",
                    "email": "bschussek@2bepublished.at"
                }
            ],
            "description": "Provides the functionality to compare PHP values for equality",
            "homepage": "https://github.com/sebastianbergmann/comparator",
            "keywords": [
                "comparator",
                "compare",
                "equality"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/comparator/issues",
                "source": "https://github.com/sebastianbergmann/comparator/tree/4.0.8"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2022-09-14T12:41:17+00:00"
        },
        {
            "name": "sebastian/complexity",
            "version": "2.0.3",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/complexity.git",
                "reference": "25f207c40d62b8b7aa32f5ab026c53561964053a"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/complexity/zipball/25f207c40d62b8b7aa32f5ab026c53561964053a",
                "reference": "25f207c40d62b8b7aa32f5ab026c53561964053a",
                "shasum": ""
            },
            "require": {
                "nikic/php-parser": "^4.18 || ^5.0",
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "Library for calculating the complexity of PHP code units",
            "homepage": "https://github.com/sebastianbergmann/complexity",
            "support": {
                "issues": "https://github.com/sebastianbergmann/complexity/issues",
                "source": "https://github.com/sebastianbergmann/complexity/tree/2.0.3"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2023-12-22T06:19:30+00:00"
        },
        {
            "name": "sebastian/diff",
            "version": "4.0.6",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/diff.git",
                "reference": "ba01945089c3a293b01ba9badc29ad55b106b0bc"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/diff/zipball/ba01945089c3a293b01ba9badc29ad55b106b0bc",
                "reference": "ba01945089c3a293b01ba9badc29ad55b106b0bc",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3",
                "symfony/process": "^4.2 || ^5"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                },
                {
                    "name": "Kore Nordmann",
                    "email": "mail@kore-nordmann.de"
                }
            ],
            "description": "Diff implementation",
            "homepage": "https://github.com/sebastianbergmann/diff",
            "keywords": [
                "diff",
                "udiff",
                "unidiff",
                "unified diff"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/diff/issues",
                "source": "https://github.com/sebastianbergmann/diff/tree/4.0.6"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2024-03-02T06:30:58+00:00"
        },
        {
            "name": "sebastian/environment",
            "version": "5.1.5",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/environment.git",
                "reference": "830c43a844f1f8d5b7a1f6d6076b784454d8b7ed"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/environment/zipball/830c43a844f1f8d5b7a1f6d6076b784454d8b7ed",
                "reference": "830c43a844f1f8d5b7a1f6d6076b784454d8b7ed",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "suggest": {
                "ext-posix": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.1-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                }
            ],
            "description": "Provides functionality to handle HHVM/PHP environments",
            "homepage": "http://www.github.com/sebastianbergmann/environment",
            "keywords": [
                "Xdebug",
                "environment",
                "hhvm"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/environment/issues",
                "source": "https://github.com/sebastianbergmann/environment/tree/5.1.5"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2023-02-03T06:03:51+00:00"
        },
        {
            "name": "sebastian/exporter",
            "version": "4.0.6",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/exporter.git",
                "reference": "78c00df8f170e02473b682df15bfcdacc3d32d72"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/exporter/zipball/78c00df8f170e02473b682df15bfcdacc3d32d72",
                "reference": "78c00df8f170e02473b682df15bfcdacc3d32d72",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3",
                "sebastian/recursion-context": "^4.0"
            },
            "require-dev": {
                "ext-mbstring": "*",
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                },
                {
                    "name": "Jeff Welch",
                    "email": "whatthejeff@gmail.com"
                },
                {
                    "name": "Volker Dusch",
                    "email": "github@wallbash.com"
                },
                {
                    "name": "Adam Harvey",
                    "email": "aharvey@php.net"
                },
                {
                    "name": "Bernhard Schussek",
                    "email": "bschussek@gmail.com"
                }
            ],
            "description": "Provides the functionality to export PHP variables for visualization",
            "homepage": "https://www.github.com/sebastianbergmann/exporter",
            "keywords": [
                "export",
                "exporter"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/exporter/issues",
                "source": "https://github.com/sebastianbergmann/exporter/tree/4.0.6"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2024-03-02T06:33:00+00:00"
        },
        {
            "name": "sebastian/global-state",
            "version": "5.0.7",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/global-state.git",
                "reference": "bca7df1f32ee6fe93b4d4a9abbf69e13a4ada2c9"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/global-state/zipball/bca7df1f32ee6fe93b4d4a9abbf69e13a4ada2c9",
                "reference": "bca7df1f32ee6fe93b4d4a9abbf69e13a4ada2c9",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3",
                "sebastian/object-reflector": "^2.0",
                "sebastian/recursion-context": "^4.0"
            },
            "require-dev": {
                "ext-dom": "*",
                "phpunit/phpunit": "^9.3"
            },
            "suggest": {
                "ext-uopz": "*"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "5.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                }
            ],
            "description": "Snapshotting of global state",
            "homepage": "http://www.github.com/sebastianbergmann/global-state",
            "keywords": [
                "global state"
            ],
            "support": {
                "issues": "https://github.com/sebastianbergmann/global-state/issues",
                "source": "https://github.com/sebastianbergmann/global-state/tree/5.0.7"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2024-03-02T06:35:11+00:00"
        },
        {
            "name": "sebastian/lines-of-code",
            "version": "1.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/lines-of-code.git",
                "reference": "e1e4a170560925c26d424b6a03aed157e7dcc5c5"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/lines-of-code/zipball/e1e4a170560925c26d424b6a03aed157e7dcc5c5",
                "reference": "e1e4a170560925c26d424b6a03aed157e7dcc5c5",
                "shasum": ""
            },
            "require": {
                "nikic/php-parser": "^4.18 || ^5.0",
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "1.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "Library for counting the lines of code in PHP source code",
            "homepage": "https://github.com/sebastianbergmann/lines-of-code",
            "support": {
                "issues": "https://github.com/sebastianbergmann/lines-of-code/issues",
                "source": "https://github.com/sebastianbergmann/lines-of-code/tree/1.0.4"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2023-12-22T06:20:34+00:00"
        },
        {
            "name": "sebastian/object-enumerator",
            "version": "4.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/object-enumerator.git",
                "reference": "5c9eeac41b290a3712d88851518825ad78f45c71"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/object-enumerator/zipball/5c9eeac41b290a3712d88851518825ad78f45c71",
                "reference": "5c9eeac41b290a3712d88851518825ad78f45c71",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3",
                "sebastian/object-reflector": "^2.0",
                "sebastian/recursion-context": "^4.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                }
            ],
            "description": "Traverses array structures and object graphs to enumerate all referenced objects",
            "homepage": "https://github.com/sebastianbergmann/object-enumerator/",
            "support": {
                "issues": "https://github.com/sebastianbergmann/object-enumerator/issues",
                "source": "https://github.com/sebastianbergmann/object-enumerator/tree/4.0.4"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2020-10-26T13:12:34+00:00"
        },
        {
            "name": "sebastian/object-reflector",
            "version": "2.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/object-reflector.git",
                "reference": "b4f479ebdbf63ac605d183ece17d8d7fe49c15c7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/object-reflector/zipball/b4f479ebdbf63ac605d183ece17d8d7fe49c15c7",
                "reference": "b4f479ebdbf63ac605d183ece17d8d7fe49c15c7",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "2.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                }
            ],
            "description": "Allows reflection of object attributes, including inherited and non-public ones",
            "homepage": "https://github.com/sebastianbergmann/object-reflector/",
            "support": {
                "issues": "https://github.com/sebastianbergmann/object-reflector/issues",
                "source": "https://github.com/sebastianbergmann/object-reflector/tree/2.0.4"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2020-10-26T13:14:26+00:00"
        },
        {
            "name": "sebastian/recursion-context",
            "version": "4.0.5",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/recursion-context.git",
                "reference": "e75bd0f07204fec2a0af9b0f3cfe97d05f92efc1"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/recursion-context/zipball/e75bd0f07204fec2a0af9b0f3cfe97d05f92efc1",
                "reference": "e75bd0f07204fec2a0af9b0f3cfe97d05f92efc1",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "4.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                },
                {
                    "name": "Jeff Welch",
                    "email": "whatthejeff@gmail.com"
                },
                {
                    "name": "Adam Harvey",
                    "email": "aharvey@php.net"
                }
            ],
            "description": "Provides functionality to recursively process PHP variables",
            "homepage": "https://github.com/sebastianbergmann/recursion-context",
            "support": {
                "issues": "https://github.com/sebastianbergmann/recursion-context/issues",
                "source": "https://github.com/sebastianbergmann/recursion-context/tree/4.0.5"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2023-02-03T06:07:39+00:00"
        },
        {
            "name": "sebastian/resource-operations",
            "version": "3.0.4",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/resource-operations.git",
                "reference": "05d5692a7993ecccd56a03e40cd7e5b09b1d404e"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/resource-operations/zipball/05d5692a7993ecccd56a03e40cd7e5b09b1d404e",
                "reference": "05d5692a7993ecccd56a03e40cd7e5b09b1d404e",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.0"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-main": "3.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de"
                }
            ],
            "description": "Provides a list of PHP built-in functions that operate on resources",
            "homepage": "https://www.github.com/sebastianbergmann/resource-operations",
            "support": {
                "source": "https://github.com/sebastianbergmann/resource-operations/tree/3.0.4"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2024-03-14T16:00:52+00:00"
        },
        {
            "name": "sebastian/type",
            "version": "3.2.1",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/type.git",
                "reference": "75e2c2a32f5e0b3aef905b9ed0b179b953b3d7c7"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/type/zipball/75e2c2a32f5e0b3aef905b9ed0b179b953b3d7c7",
                "reference": "75e2c2a32f5e0b3aef905b9ed0b179b953b3d7c7",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "require-dev": {
                "phpunit/phpunit": "^9.5"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.2-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "Collection of value objects that represent the types of the PHP type system",
            "homepage": "https://github.com/sebastianbergmann/type",
            "support": {
                "issues": "https://github.com/sebastianbergmann/type/issues",
                "source": "https://github.com/sebastianbergmann/type/tree/3.2.1"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2023-02-03T06:13:03+00:00"
        },
        {
            "name": "sebastian/version",
            "version": "3.0.2",
            "source": {
                "type": "git",
                "url": "https://github.com/sebastianbergmann/version.git",
                "reference": "c6c1022351a901512170118436c764e473f6de8c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/sebastianbergmann/version/zipball/c6c1022351a901512170118436c764e473f6de8c",
                "reference": "c6c1022351a901512170118436c764e473f6de8c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.3"
            },
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.0-dev"
                }
            },
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Sebastian Bergmann",
                    "email": "sebastian@phpunit.de",
                    "role": "lead"
                }
            ],
            "description": "Library that helps with managing the version number of Git-hosted PHP projects",
            "homepage": "https://github.com/sebastianbergmann/version",
            "support": {
                "issues": "https://github.com/sebastianbergmann/version/issues",
                "source": "https://github.com/sebastianbergmann/version/tree/3.0.2"
            },
            "funding": [
                {
                    "url": "https://github.com/sebastianbergmann",
                    "type": "github"
                }
            ],
            "time": "2020-09-28T06:39:44+00:00"
        },
        {
            "name": "squizlabs/php_codesniffer",
            "version": "3.13.1",
            "source": {
                "type": "git",
                "url": "https://github.com/PHPCSStandards/PHP_CodeSniffer.git",
                "reference": "1b71b4dd7e7ef651ac749cea67e513c0c832f4bd"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/PHPCSStandards/PHP_CodeSniffer/zipball/1b71b4dd7e7ef651ac749cea67e513c0c832f4bd",
                "reference": "1b71b4dd7e7ef651ac749cea67e513c0c832f4bd",
                "shasum": ""
            },
            "require": {
                "ext-simplexml": "*",
                "ext-tokenizer": "*",
                "ext-xmlwriter": "*",
                "php": ">=5.4.0"
            },
            "require-dev": {
                "phpunit/phpunit": "^4.0 || ^5.0 || ^6.0 || ^7.0 || ^8.0 || ^9.3.4"
            },
            "bin": [
                "bin/phpcbf",
                "bin/phpcs"
            ],
            "type": "library",
            "extra": {
                "branch-alias": {
                    "dev-master": "3.x-dev"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Greg Sherwood",
                    "role": "Former lead"
                },
                {
                    "name": "Juliette Reinders Folmer",
                    "role": "Current lead"
                },
                {
                    "name": "Contributors",
                    "homepage": "https://github.com/PHPCSStandards/PHP_CodeSniffer/graphs/contributors"
                }
            ],
            "description": "PHP_CodeSniffer tokenizes PHP, JavaScript and CSS files and detects violations of a defined set of coding standards.",
            "homepage": "https://github.com/PHPCSStandards/PHP_CodeSniffer",
            "keywords": [
                "phpcs",
                "standards",
                "static analysis"
            ],
            "support": {
                "issues": "https://github.com/PHPCSStandards/PHP_CodeSniffer/issues",
                "security": "https://github.com/PHPCSStandards/PHP_CodeSniffer/security/policy",
                "source": "https://github.com/PHPCSStandards/PHP_CodeSniffer",
                "wiki": "https://github.com/PHPCSStandards/PHP_CodeSniffer/wiki"
            },
            "funding": [
                {
                    "url": "https://github.com/PHPCSStandards",
                    "type": "github"
                },
                {
                    "url": "https://github.com/jrfnl",
                    "type": "github"
                },
                {
                    "url": "https://opencollective.com/php_codesniffer",
                    "type": "open_collective"
                },
                {
                    "url": "https://thanks.dev/u/gh/phpcsstandards",
                    "type": "thanks_dev"
                }
            ],
            "time": "2025-06-12T15:04:34+00:00"
        },
        {
            "name": "symfony/options-resolver",
            "version": "v6.4.16",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/options-resolver.git",
                "reference": "368128ad168f20e22c32159b9f761e456cec0c78"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/options-resolver/zipball/368128ad168f20e22c32159b9f761e456cec0c78",
                "reference": "368128ad168f20e22c32159b9f761e456cec0c78",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/deprecation-contracts": "^2.5|^3"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\OptionsResolver\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Provides an improved replacement for the array_replace PHP function",
            "homepage": "https://symfony.com",
            "keywords": [
                "config",
                "configuration",
                "options"
            ],
            "support": {
                "source": "https://github.com/symfony/options-resolver/tree/v6.4.16"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-11-20T10:57:02+00:00"
        },
        {
            "name": "symfony/polyfill-php81",
            "version": "v1.32.0",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/polyfill-php81.git",
                "reference": "4a4cfc2d253c21a5ad0e53071df248ed48c6ce5c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/polyfill-php81/zipball/4a4cfc2d253c21a5ad0e53071df248ed48c6ce5c",
                "reference": "4a4cfc2d253c21a5ad0e53071df248ed48c6ce5c",
                "shasum": ""
            },
            "require": {
                "php": ">=7.2"
            },
            "type": "library",
            "extra": {
                "thanks": {
                    "url": "https://github.com/symfony/polyfill",
                    "name": "symfony/polyfill"
                }
            },
            "autoload": {
                "files": [
                    "bootstrap.php"
                ],
                "psr-4": {
                    "Symfony\\Polyfill\\Php81\\": ""
                },
                "classmap": [
                    "Resources/stubs"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Nicolas Grekas",
                    "email": "p@tchwork.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Symfony polyfill backporting some PHP 8.1+ features to lower PHP versions",
            "homepage": "https://symfony.com",
            "keywords": [
                "compatibility",
                "polyfill",
                "portable",
                "shim"
            ],
            "support": {
                "source": "https://github.com/symfony/polyfill-php81/tree/v1.32.0"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2024-09-09T11:45:10+00:00"
        },
        {
            "name": "symfony/process",
            "version": "v6.4.20",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/process.git",
                "reference": "e2a61c16af36c9a07e5c9906498b73e091949a20"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/process/zipball/e2a61c16af36c9a07e5c9906498b73e091949a20",
                "reference": "e2a61c16af36c9a07e5c9906498b73e091949a20",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Process\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Executes commands in sub-processes",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/process/tree/v6.4.20"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-03-10T17:11:00+00:00"
        },
        {
            "name": "symfony/stopwatch",
            "version": "v6.4.19",
            "source": {
                "type": "git",
                "url": "https://github.com/symfony/stopwatch.git",
                "reference": "dfe1481c12c06266d0c3d58c0cb4b09bd497ab9c"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/symfony/stopwatch/zipball/dfe1481c12c06266d0c3d58c0cb4b09bd497ab9c",
                "reference": "dfe1481c12c06266d0c3d58c0cb4b09bd497ab9c",
                "shasum": ""
            },
            "require": {
                "php": ">=8.1",
                "symfony/service-contracts": "^2.5|^3"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "Symfony\\Component\\Stopwatch\\": ""
                },
                "exclude-from-classmap": [
                    "/Tests/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "authors": [
                {
                    "name": "Fabien Potencier",
                    "email": "fabien@symfony.com"
                },
                {
                    "name": "Symfony Community",
                    "homepage": "https://symfony.com/contributors"
                }
            ],
            "description": "Provides a way to profile code",
            "homepage": "https://symfony.com",
            "support": {
                "source": "https://github.com/symfony/stopwatch/tree/v6.4.19"
            },
            "funding": [
                {
                    "url": "https://symfony.com/sponsor",
                    "type": "custom"
                },
                {
                    "url": "https://github.com/fabpot",
                    "type": "github"
                },
                {
                    "url": "https://tidelift.com/funding/github/packagist/symfony/symfony",
                    "type": "tidelift"
                }
            ],
            "time": "2025-02-21T10:06:30+00:00"
        },
        {
            "name": "theseer/tokenizer",
            "version": "1.2.3",
            "source": {
                "type": "git",
                "url": "https://github.com/theseer/tokenizer.git",
                "reference": "737eda637ed5e28c3413cb1ebe8bb52cbf1ca7a2"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/theseer/tokenizer/zipball/737eda637ed5e28c3413cb1ebe8bb52cbf1ca7a2",
                "reference": "737eda637ed5e28c3413cb1ebe8bb52cbf1ca7a2",
                "shasum": ""
            },
            "require": {
                "ext-dom": "*",
                "ext-tokenizer": "*",
                "ext-xmlwriter": "*",
                "php": "^7.2 || ^8.0"
            },
            "type": "library",
            "autoload": {
                "classmap": [
                    "src/"
                ]
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "BSD-3-Clause"
            ],
            "authors": [
                {
                    "name": "Arne Blankerts",
                    "email": "arne@blankerts.de",
                    "role": "Developer"
                }
            ],
            "description": "A small library for converting tokenized PHP source code into XML and potentially other formats",
            "support": {
                "issues": "https://github.com/theseer/tokenizer/issues",
                "source": "https://github.com/theseer/tokenizer/tree/1.2.3"
            },
            "funding": [
                {
                    "url": "https://github.com/theseer",
                    "type": "github"
                }
            ],
            "time": "2024-03-03T12:36:25+00:00"
        },
        {
            "name": "vclayton/unpecl-oauth",
            "version": "v0.5.5",
            "source": {
                "type": "git",
                "url": "https://github.com/vclayton/unpecl-oauth.git",
                "reference": "9de5424074b87a863aea22988a55a376f3407c9f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/vclayton/unpecl-oauth/zipball/9de5424074b87a863aea22988a55a376f3407c9f",
                "reference": "9de5424074b87a863aea22988a55a376f3407c9f",
                "shasum": ""
            },
            "require": {
                "ext-curl": "*",
                "ext-hash": "*",
                "ext-openssl": "*",
                "php": ">=5.1.0"
            },
            "type": "library",
            "autoload": {
                "files": [
                    "src/functions.php"
                ],
                "psr-0": {
                    "": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "Native PHP drop-in replacement for the PECL OAuth extension",
            "homepage": "https://github.com/vclayton/unpecl-oauth",
            "keywords": [
                "oauth",
                "pecl"
            ],
            "support": {
                "issues": "https://github.com/vclayton/unpecl-oauth/issues",
                "source": "https://github.com/vclayton/unpecl-oauth/tree/master"
            },
            "time": "2017-06-08T13:54:14+00:00"
        },
        {
            "name": "webonyx/graphql-php",
            "version": "v15.20.0",
            "source": {
                "type": "git",
                "url": "https://github.com/webonyx/graphql-php.git",
                "reference": "60feb7ad5023c0ef411efbdf9792d3df5812e28f"
            },
            "dist": {
                "type": "zip",
                "url": "https://api.github.com/repos/webonyx/graphql-php/zipball/60feb7ad5023c0ef411efbdf9792d3df5812e28f",
                "reference": "60feb7ad5023c0ef411efbdf9792d3df5812e28f",
                "shasum": ""
            },
            "require": {
                "ext-json": "*",
                "ext-mbstring": "*",
                "php": "^7.4 || ^8"
            },
            "require-dev": {
                "amphp/amp": "^2.6",
                "amphp/http-server": "^2.1",
                "dms/phpunit-arraysubset-asserts": "dev-master",
                "ergebnis/composer-normalize": "^2.28",
                "friendsofphp/php-cs-fixer": "3.73.1",
                "mll-lab/php-cs-fixer-config": "5.11.0",
                "nyholm/psr7": "^1.5",
                "phpbench/phpbench": "^1.2",
                "phpstan/extension-installer": "^1.1",
                "phpstan/phpstan": "2.1.8",
                "phpstan/phpstan-phpunit": "2.0.4",
                "phpstan/phpstan-strict-rules": "2.0.4",
                "phpunit/phpunit": "^9.5 || ^10.5.21 || ^11",
                "psr/http-message": "^1 || ^2",
                "react/http": "^1.6",
                "react/promise": "^2.0 || ^3.0",
                "rector/rector": "^2.0",
                "symfony/polyfill-php81": "^1.23",
                "symfony/var-exporter": "^5 || ^6 || ^7",
                "thecodingmachine/safe": "^1.3 || ^2 || ^3"
            },
            "suggest": {
                "amphp/http-server": "To leverage async resolving with webserver on AMPHP platform",
                "psr/http-message": "To use standard GraphQL server",
                "react/promise": "To leverage async resolving on React PHP platform"
            },
            "type": "library",
            "autoload": {
                "psr-4": {
                    "GraphQL\\": "src/"
                }
            },
            "notification-url": "https://packagist.org/downloads/",
            "license": [
                "MIT"
            ],
            "description": "A PHP port of GraphQL reference implementation",
            "homepage": "https://github.com/webonyx/graphql-php",
            "keywords": [
                "api",
                "graphql"
            ],
            "support": {
                "issues": "https://github.com/webonyx/graphql-php/issues",
                "source": "https://github.com/webonyx/graphql-php/tree/v15.20.0"
            },
            "funding": [
                {
                    "url": "https://opencollective.com/webonyx-graphql-php",
                    "type": "open_collective"
                }
            ],
            "time": "2025-03-21T08:45:04+00:00"
        }
    ],
    "aliases": [],
    "minimum-stability": "stable",
    "stability-flags": {},
    "prefer-stable": false,
    "prefer-lowest": false,
    "platform": {
        "ext-json": "*",
        "ext-soap": "*"
    },
    "platform-dev": {
        "php": "^8.1"
    },
    "plugin-api-version": "2.6.0"
}
