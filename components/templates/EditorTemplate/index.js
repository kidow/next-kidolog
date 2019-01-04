import './index.scss'
import { Input, Button, Icon, IconButton } from 'components/atoms'
import { PreviewContainer } from 'containers'
import { IoIosArrowDropleft, IoIosImage } from 'react-icons/io'
import { MdFileUpload } from 'react-icons/md'
import Router from 'next/router'

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
        <div className="content__flex" style={markdownStyle}>
          <MarkdownContainer />
        </div>
        <div className="content__flex" style={previewStyle}>
          <PreviewContainer />
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

export default EditorTemplate
