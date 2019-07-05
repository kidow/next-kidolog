import styles from './index.scss'
import classNames from 'classnames/bind'
import { Input, Button, Icon, IconButton } from 'components/atoms'

import { IoIosArrowDropleft, IoIosImage } from 'react-icons/io'
import { MdFileUpload } from 'react-icons/md'

import Router from 'next/router'
import PropTypes from 'prop-types'
import { Markdown, Preview } from 'components/molecules'

const cx = classNames.bind(styles)

const EditorTemplate = ({
  markdownStyle,
  previewStyle,
  separatorStyle,
  onSeparatorMouseDown,
  title,
  onChange,
  onSubmit,
  onUploadClick,
  updateMode,
  onUploadThumbClick
}) => {
  return (
    <div className="editor-template">
      <div className="editor__header">
        <div className="header__left">
          <Icon
            Name={IoIosArrowDropleft}
            size={35}
            className="back-icon"
            onClick={() => Router.back()}
          />
          <div className="header__input">
            <Input
              name="title"
              value={title}
              onChange={onChange}
              placeholder="제목을 입력해주세요."
              autoFocus
              theme="editor"
            />
          </div>
        </div>
        <div className="header__right">
          <IconButton
            IconName={MdFileUpload}
            size={25}
            onClick={onUploadThumbClick}
          >
            썸네일
          </IconButton>
          <div className="spacer" />
          <IconButton IconName={IoIosImage} size={25} onClick={onUploadClick}>
            업로드
          </IconButton>
          <div className="spacer" />
          <Button onClick={onSubmit}>{updateMode ? '수정' : '작성'}하기</Button>
        </div>
      </div>
      <div className="editor__content">
        <div style={markdownStyle} className={cx('content__flex', 'display')}>
          <Markdown />
        </div>
        <div style={previewStyle} className={cx('content__flex', 'none')}>
          <Preview />
        </div>
        <div
          className="content__separator"
          style={separatorStyle}
          onMouseDown={onSeparatorMouseDown}
        />
      </div>
    </div>
  )
}

EditorTemplate.propTypes = {
  markdownStyle: PropTypes.object,
  previewStyle: PropTypes.object,
  separatorStyle: PropTypes.object,
  onSeparatorMouseDown: PropTypes.func,
  title: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onUploadClick: PropTypes.func,
  updateMode: PropTypes.bool,
  onUploadThumbClick: PropTypes.func
}

export default EditorTemplate
