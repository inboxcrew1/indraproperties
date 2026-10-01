const fs = require('fs');

const photoMap = {
  'prop-001': [
    { id: 'm-001-1', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-001-2', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-002': [
    { id: 'm-002-1', url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-002-2', url: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-003': [
    { id: 'm-003-1', url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-003-2', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', type: 'image', isCover: false, order: 1 },
    { id: 'm-003-3', url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80', type: 'image', isCover: false, order: 2 }
  ],
  'prop-004': [
    { id: 'm-004-1', url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-004-2', url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-005': [
    { id: 'm-005-1', url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-005-2', url: 'https://images.unsplash.com/photo-1600596021326-a8c7f35c0989?w=1200&q=80', type: 'image', isCover: false, order: 1 },
    { id: 'm-005-3', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', type: 'image', isCover: false, order: 2 }
  ],
  'prop-006': [
    { id: 'm-006-1', url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-006-2', url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-007': [
    { id: 'm-007-1', url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-007-2', url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-008': [
    { id: 'm-008-1', url: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-008-2', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-009': [
    { id: 'm-009-1', url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-009-2', url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-010': [
    { id: 'm-010-1', url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-010-2', url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-011': [
    { id: 'm-011-1', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-011-2', url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-012': [
    { id: 'm-012-1', url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-012-2', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-013': [
    { id: 'm-013-1', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-013-2', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-014': [
    { id: 'm-014-1', url: 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-014-2', url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-015': [
    { id: 'm-015-1', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-015-2', url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-016': [
    { id: 'm-016-1', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-016-2', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-017': [
    { id: 'm-017-1', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-017-2', url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-018': [
    { id: 'm-018-1', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-018-2', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-019': [
    { id: 'm-019-1', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-019-2', url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ],
  'prop-020': [
    { id: 'm-020-1', url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200&q=80', type: 'image', isCover: true, order: 0 },
    { id: 'm-020-2', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', type: 'image', isCover: false, order: 1 }
  ]
};

const raw = fs.readFileSync('src/lib/data/properties.json', 'utf8');
const properties = JSON.parse(raw);

properties.forEach(p => {
  if (photoMap[p.id]) {
    p.media = photoMap[p.id];
  }
});

fs.writeFileSync('src/lib/data/properties.json', JSON.stringify(properties, null, 2), 'utf8');
console.log('Successfully updated all 20 property photo collections.');
